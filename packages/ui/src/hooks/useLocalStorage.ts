import { useEffect, useState } from "react";

export function useLocalStorage(key: string): string | null {
	const [storedValue, setStoredValue] = useState<string | null>(null);

	useEffect(() => {
		const handleStorageChange = (event: StorageEvent) => {
			if (event.key === key) {
				try {
					const newValue = event.newValue;
					setStoredValue(newValue);
				} catch (error) {
					console.error("Error parsing localStorage event data", error);
				}
			}
		};

		window.addEventListener("storage", handleStorageChange);
		return () => window.removeEventListener("storage", handleStorageChange);
	}, [key]);

	return storedValue;
}
