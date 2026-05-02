export default function Footer() {
  return (
    <footer className="pb-4">
      <div className="container mx-auto px-4 ">
        {/* Left side: Branding */}
        <div className="mb-4 md:mb-0">
          <p className="text-xl font-bold  text-black text-center">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
