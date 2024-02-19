import { ChangeEvent, useEffect, useState } from "react";

interface ErrorResponse {
  message: string;
}

interface ISearch {
  id: number;
  username: string;
}

const useSearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<ISearch[] | undefined>(undefined);
  const [showUserList, setShowUserList] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      try {
        const response = await fetch(
          `http://localhost:3000/user/${inputValue}`,
          {
            credentials: "include",
          }
        );
        if (!response.ok) {
          const errorResponse: ErrorResponse = await response.json();
          setError(errorResponse.message);
          return;
        }
        const data: ISearch[] = await response.json();
        setUsers(data);
        return;
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (inputValue.length >= 3) {
      setIsLoading(true);

      fetchUsers();
    } else {
      setUsers([]);
      setError(null);
    }
  }, [inputValue]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return {
    users,
    showUserList,
    inputValue,
    error,
    isLoading,
    setInputValue,
    setShowUserList,
    handleInputChange,
  };
};

export default useSearchInput;
