import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    baseUrl: string;
    searchParams?: Record<string, string | undefined>;
}

const Pagination = ({ currentPage, totalPages, baseUrl, searchParams = {} }: PaginationProps) => {
    const createPageUrl = (page: number) => {
        const params = new URLSearchParams();
        Object.entries(searchParams).forEach(([key, value]) => {
            if (value && key !== "page") {
                params.set(key, value);
            }
        });
        params.set("page", page.toString());
        return `${baseUrl}?${params.toString()}`;
    };

    // Temporarily show pagination even with 1 page for debugging
    // if (totalPages <= 1) return null;

    // Logic to show limited page numbers (e.g., 1, 2, 3 ... 10)
    const getPageNumbers = () => {
        const pages = [];
        const maxVisible = 5;

        if (totalPages <= maxVisible) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            // Always show first, last, and current (+/- 1)
            let start = Math.max(1, currentPage - 1);
            let end = Math.min(totalPages, currentPage + 1);

            if (currentPage <= 2) {
                end = Math.min(totalPages, 4); // Show 1, 2, 3, 4
            }
            if (currentPage >= totalPages - 1) {
                start = Math.max(1, totalPages - 3); // Show last 4
            }

            if (start > 1) {
                pages.push(1);
                if (start > 2) pages.push("...");
            }

            for (let i = start; i <= end; i++) {
                pages.push(i);
            }

            if (end < totalPages) {
                if (end < totalPages - 1) pages.push("...");
                pages.push(totalPages);
            }
        }
        return pages;
    };

    const pageNumbers = getPageNumbers();

    return (
        <div className="flex flex-wrap justify-center items-center gap-2 mt-12">
            <Button
                variant="outline"
                size="icon"
                disabled={currentPage <= 1}
                asChild={currentPage > 1}
                className="hover:bg-[#1a8a81] hover:text-white transition-colors"
            >
                {currentPage > 1 ? (
                    <Link href={createPageUrl(currentPage - 1)}>
                        <ChevronLeft className="h-4 w-4" />
                    </Link>
                ) : (
                    <span><ChevronLeft className="h-4 w-4" /></span>
                )}
            </Button>

            <div className="flex gap-2 items-center">
                {pageNumbers.map((page, index) => (
                    typeof page === "number" ? (
                        <Button
                            key={index}
                            variant={currentPage === page ? "default" : "outline"}
                            size="sm"
                            asChild
                            className={`min-w-[40px] ${currentPage === page
                                ? "bg-[#1a8a81] hover:bg-[#157a72] text-white font-bold"
                                : "hover:bg-[#f0fdfa] hover:text-[#1a8a81]"
                                }`}
                        >
                            <Link href={createPageUrl(page)}>
                                {page}
                            </Link>
                        </Button>
                    ) : (
                        <span key={index} className="text-gray-400 px-1">...</span>
                    )
                ))}
            </div>

            <Button
                variant="outline"
                size="icon"
                disabled={currentPage >= totalPages}
                asChild={currentPage < totalPages}
                className="hover:bg-[#1a8a81] hover:text-white transition-colors"
            >
                {currentPage < totalPages ? (
                    <Link href={createPageUrl(currentPage + 1)}>
                        <ChevronRight className="h-4 w-4" />
                    </Link>
                ) : (
                    <span><ChevronRight className="h-4 w-4" /></span>
                )}
            </Button>
        </div>
    );
};

export default Pagination;
