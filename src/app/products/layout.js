export const metadata = {
    title: "Featured products",
  };
  
  export default function ProductsLayout({ children }) {
    return (
      <div className="dark:bg-gray-800">
        <div className="max-w-screen-xl mx-auto py-8 min-h-svh">{children}</div>
      </div>
    );
  }