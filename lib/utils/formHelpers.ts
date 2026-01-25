import { toast } from "react-hot-toast";

/**
 * Display validation errors from server action
 */
export function displayValidationErrors(errors: Record<string, string[]>) {
    const firstError = Object.values(errors)[0];
    const errorMessage =
        typeof firstError === "string"
            ? firstError
            : Array.isArray(firstError)
                ? firstError[0]
                : "Validation error";
    toast.error(errorMessage);
}

/**
 * Handle server action response and display appropriate messages
 */
export function handleServerResponse(
    result: {
        success: boolean;
        message?: string;
        errors?: Record<string, string[]>;
    },
    successCallback?: () => void
) {
    if (result.success) {
        toast.success(result.message || "Operation successful!");
        if (successCallback) successCallback();
        return true;
    } else {
        if (result.errors) {
            displayValidationErrors(result.errors);
        } else {
            toast.error(result.message || "Operation failed");
        }
        return false;
    }
}

/**
 * Convert MongoDB document to plain object for Next.js serialization
 */
export function serializeDocument(doc: any) {
    return {
        ...doc.toObject(),
        _id: doc._id.toString(),
        createdAt: doc.createdAt?.toISOString(),
        updatedAt: doc.updatedAt?.toISOString(),
    };
}
