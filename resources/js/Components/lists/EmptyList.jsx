import { MessageCircleWarning } from 'lucide-react';

export default function EmptyList({ model }) {
    return (
        <p className="flex flex-col items-center justify-center gap-3 py-8 text-center text-3xl text-gray-600">
            <MessageCircleWarning size={100} />
            لا يوجد أي {model}
        </p>
    );
}
