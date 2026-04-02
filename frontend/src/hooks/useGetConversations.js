import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useConversations from "../zustand/useConversations";

const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);
    const { searchQuery } = useConversations();

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                const route = searchQuery !== "" ? fetch(`/api/users/${searchQuery}`) : fetch("/api/users");
                const res = await route;
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }
                setConversations(data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        getConversations();
    }, [searchQuery]);

    return { loading, conversations };
};

export default useGetConversations;