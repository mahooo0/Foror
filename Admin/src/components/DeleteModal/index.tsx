'use client';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

interface DeleteModalProps {
    /**
     * Controls whether the modal is open or closed
     */
    isOpen: boolean;

    /**
     * Function called when the delete action is confirmed
     */
    onDelete: () => void;

    /**
     * Function called when the modal is closed without deleting
     */
    onClose: () => void;

    /**
     * The title of the modal
     * @default "Confirm Deletion"
     */
    title?: string;

    /**
     * The description/message shown in the modal
     * @default "Are you sure you want to delete this item? This action cannot be undone."
     */
    description?: string;

    /**
     * Text for the delete button
     * @default "Delete"
     */
    deleteButtonText?: string;

    /**
     * Text for the cancel button
     * @default "Cancel"
     */
    cancelButtonText?: string;

    /**
     * Whether the delete action is currently in progress
     * @default false
     */
    isDeleting?: boolean;
}

export function DeleteModal({
    isOpen,
    onDelete,
    onClose,
    title = 'Confirm Deletion',
    description = 'Are you sure you want to delete this item? This action cannot be undone.',
    deleteButtonText = 'Delete',
    cancelButtonText = 'Cancel',
    isDeleting = false,
}: DeleteModalProps) {
    return (
        <Dialog
            open={isOpen}
            onOpenChange={(open) => {
                if (!open) onClose();
            }}
        >
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <Trash2 className="h-5 w-5 text-destructive" />
                        {title}
                    </DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>

                <DialogFooter className="gap-2 sm:gap-0">
                    <Button
                        variant="outline"
                        onClick={onClose}
                        disabled={isDeleting}
                    >
                        {cancelButtonText}
                    </Button>
                    <Button
                        variant="destructive"
                        onClick={onDelete}
                        disabled={isDeleting}
                    >
                        {isDeleting ? (
                            <>
                                <span className="mr-2">Deleting...</span>
                                <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                            </>
                        ) : (
                            deleteButtonText
                        )}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
