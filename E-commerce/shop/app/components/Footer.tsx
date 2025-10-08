export default function Footer() {
  return (
    <footer className="text-center py-4 mt-10 border-t border-gray-300 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400">
      © {new Date().getFullYear()} MiniStore. All rights reserved.
    </footer>
  );
}
