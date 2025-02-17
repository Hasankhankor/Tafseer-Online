import Footer from "./footer";
import Nav_bar from "./navbar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-beige text-green-900">
      {/* Navbar */}
      <Nav_bar />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
