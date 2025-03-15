"use client";

import {
	createContext,
	useContext,
	useState,
	useEffect,
	type ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
	theme: Theme;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState<Theme>("light");
	const [mounted, setMounted] = useState(false);

	// After hydration, we can safely show the UI
	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		// Handle initial theme setup - runs only on client
		if (mounted) {
			// Check for user preference in localStorage
			const savedTheme = localStorage.getItem("theme") as Theme | null;

			if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
				setTheme(savedTheme);
			} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
				setTheme("dark");
			}
		}
	}, [mounted]);

	useEffect(() => {
		// Update the class on the document element when theme changes
		if (mounted) {
			if (theme === "dark") {
				document.documentElement.classList.add("dark");
			} else {
				document.documentElement.classList.remove("dark");
			}

			// Store user preference
			localStorage.setItem("theme", theme);
		}
	}, [theme, mounted]);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
}
