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

    if (totalPages <= 1) return null;

    return (
        <div className="flex justify-center items-center gap-2 mt-12">
            <Button
                variant="outline"
                size="icon"
                disabled={currentPage <= 1}
                asChild={currentPage > 1}
            >
                {currentPage > 1 ? (
                    <Link href={createPageUrl(currentPage - 1)}>
                        <ChevronLeft className="h-4 w-4" />
                    </Link>
                ) : (
                    <span><ChevronLeft className="h-4 w-4" /></span>
                )}
            </Button>

            <span className="text-sm font-medium text-gray-600 bg-white px-4 py-2 rounded-lg border border-gray-100">
                Page {currentPage} of {totalPages}
            </span>

            <Button
                variant="outline"
                size="icon"
                disabled={currentPage >= totalPages}
                asChild={currentPage < totalPages}
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
