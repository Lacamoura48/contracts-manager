<?php

namespace App\Http\Controllers;

use App\Models\Contract;
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

        $data['contracts_count'] = Contract::count();
        $data['paid_contracts'] = Contract::whereExists(function ($query) use ($startOfMonth, $endOfMonth) {
            $query->select(DB::raw(1))
                ->from('bonds')
                ->whereColumn('bonds.contract_id', 'contracts.id')
                ->whereBetween('bonds.payement_date', [$startOfMonth, $endOfMonth])
                ->where('bonds.status', 'paid');
        })->count();
        $data['late_contracts'] = Contract::whereExists(function ($query) use ($twoDaysAfter, $threeDaysLate) {
            $query->select(DB::raw(1))
                ->from('bonds')
                ->whereColumn('bonds.contract_id', 'contracts.id')
                ->whereBetween('bonds.payement_date', [$threeDaysLate, $twoDaysAfter])
                ->whereNull('bonds.status');
        })->count();
        $data['current_contracts'] = Contract::whereExists(function ($query) use ($oneDayLate, $today) {
            $query->select(DB::raw(1))
                ->from('bonds')
                ->whereColumn('bonds.contract_id', 'contracts.id')
                ->whereBetween('bonds.payement_date', [$oneDayLate, $today])
                ->whereNull('bonds.status');
        })->count();
        $data['very_late_contracts'] = Contract::whereExists(function ($query) use ($fourDaysLate) {
            $query->select(DB::raw(1))
                ->from('bonds')
                ->whereColumn('bonds.contract_id', 'contracts.id')
                ->where('bonds.payement_date', '<=', $fourDaysLate)
                ->whereNull('bonds.status');
        })->count();

        return Inertia::render('Dashboard', ['data' => $data]);
    }
}
