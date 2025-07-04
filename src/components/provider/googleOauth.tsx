"use client";
import { useEffect } from "react";
import { useCallApi } from "@/hooks"
import { redirect } from "next/navigation";

export default function GoogleOauth({ children }: { children: React.ReactNode }) {
    const { fetchAPI } = useCallApi();

    useEffect(() => {
        const fetchData = async () => {
            await fetchAPI(
                '/api/google-oauth',
                'GET',
                undefined,
                undefined,
                undefined,
                undefined,
                async () => {
                    redirect('/')
                }
            );
        };
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {children}
        </>
    )
}