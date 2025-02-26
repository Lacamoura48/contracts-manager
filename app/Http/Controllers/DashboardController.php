<?php

namespace App\Http\Controllers;

use App\Models\Contract;
use App\Models\Bond;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $data = [];
        $today = Carbon::today();
        $oneDayLate = $today->copy()->subDays(1);
        $twoDaysAfter = $today->copy()->subDays(2);
        $threeDaysLate = $today->copy()->subDays(3);
        $fourDaysLate = $today->copy()->subDays(4);
        $startOfMonth = $today->copy()->startOfMonth();
        $endOfMonth = $today->copy()->endOfMonth();

        $data['contracts_count'] = Contract::where('trash', false)->count();
        $data['contracts_sum'] = Bond::whereHas('contract', function ($query) {
            $query->where('trash', false);
        })->sum('amount');
        $data['contracts_monthly_sum'] = Bond::whereHas('contract', function ($query) use ($startOfMonth, $endOfMonth) {
            $query->where('trash', false)->whereBetween('payement_date', [$startOfMonth, $endOfMonth]);
        })->sum('amount');
        $data['paid_contracts'] = Contract::where('trash', false)->whereExists(function ($query) use ($startOfMonth, $endOfMonth) {
            $query->select(DB::raw(1))
                ->from('bonds')
                ->whereColumn('bonds.contract_id', 'contracts.id')
                ->whereBetween('bonds.payement_date', [$startOfMonth, $endOfMonth])
                ->where('bonds.status', 'paid');
        })->count();
        $data['all_paid_contracts'] = Bond::whereHas('contract', function ($query){
            $query->where('trash', false);
        })->where('status', 'paid')->count();

        $data['late_contracts'] = Bond::whereHas('contract', function ($query) {
            $query->where('trash', false);

        })->whereBetween('payement_date', [$threeDaysLate, $twoDaysAfter])
                ->where(function ($query) {
            $query->where('status', '!=', 'paid')
                  ->orWhereNull('status');
                  
        })->count();

        $data['current_contracts'] = Bond::whereHas('contract', function ($query) {
            $query->where('trash', false);
        })->whereBetween('payement_date', [$oneDayLate, $today])
                ->where(function ($query) {
            $query->where('status', '!=', 'paid')
                  ->orWhereNull('status');
                  
        })->count();

        $data['very_late_contracts'] = Bond::whereHas('contract', function ($query) {
            $query->where('trash', false);
        })->where('payement_date', '<=', $fourDaysLate)
                ->where(function ($query) {
            $query->where('status', '!=', 'paid')
                  ->orWhereNull('status');
                  
        })->count();

        $data['sum_unpaid_amount'] = Bond::whereHas('contract', function ($query) {
            $query->where('trash', false);
        })
        ->where(function ($query) {
            $query->where('status', '!=', 'paid')
                  ->orWhereNull('status');
        })->sum('amount');
        $data['sum_paid_amount'] = Bond::whereHas('contract', function ($query) {
            $query->where('trash', false);
        })
        ->where(function ($query) {
            $query->where('status', 'paid');
        })->sum('amount');
        
        $data['sum_monthly_paid_amount'] = Bond::whereHas('contract', function ($query) use ($startOfMonth, $endOfMonth) {
            $query->where('trash', false);
        })
        ->where('status', 'paid')
        ->whereBetween('payement_date', [$startOfMonth, $endOfMonth])
        ->sum('amount');

        $data['sum_monthly_unpaid_amount'] = Bond::whereHas('contract', function ($query) {
            $query->where('trash', false);
        })
        ->where(function ($query) {
            $query->where('status', '!=', 'paid')
                  ->orWhereNull('status');
                  
        })->whereBetween('payement_date', [$startOfMonth, $endOfMonth])
        ->sum('amount');
        return Inertia::render('Dashboard', ['data' => $data]);
    }
}
