import { ChevronRight } from 'lucide-react';

function NavlinksContainer({ children, title, icon }: any) {
    return (
        <div className="group relative grid grid-rows-[0fr] transition-all duration-500 hover:grid-rows-[1fr] focus:grid-rows-[1fr]">
            <p
                className={`bg-secondary text-primary hover:bg-muted group-hover:bg-muted absolute mb-2 flex w-full items-center justify-between rounded-md px-2 py-2 text-sm font-medium transition-colors`}
            >
                <span className="flex items-center gap-1">
                    {icon}
                    {title}
                </span>
                <ChevronRight className="transition-transform group-hover:rotate-90" />
            </p>
            <div className="mt-10 overflow-hidden">{children}</div>
        </div>
    );
}

export default NavlinksContainer;
