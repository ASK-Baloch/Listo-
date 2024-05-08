import { useState, useCallback } from "react";

import { ActionState, FieldErrors } from "@/lib/create-safe-action";

type Action<TInput, TOutput> = (data: TInput) => Promise<ActionState<TInput, TOutput>>;

interface UseActionOptions<TOutput> {
    onSuccess?: (data: TOutput) => void;
    onError?: (error: string) => void;
    onComplete?: () => void;
}

export const useAction = <TInput, TOutput>(action: Action<TInput, TOutput>, options: UseActionOptions<TOutput> = {}) => {
    const [FieldErrors, setFieldErrors] = useState<FieldErrors<TInput> | undefined>(undefined);
    const [error, setError] = useState<string | undefined>(undefined);
    const [data, setdata] = useState<TOutput | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const execute = useCallBack(
        async (input:TInput) => {
            setIsLoading(true);            
        }
    )



}