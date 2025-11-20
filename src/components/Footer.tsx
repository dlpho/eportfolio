export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12 border-t-4 border-red-700">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-white mb-2">Denise Liana P. Ho</p>
            <p className="text-stone-400 text-sm font-mono">
              ID123 BSCS-ST · De La Salle University - Manila
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-stone-400 text-sm mb-1">
              Last updated: November 2025
            </p>
            <p className="text-stone-500 text-xs font-mono">
              Created for SAS3000 · Career E-Portfolio
              Requirement
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-stone-700 text-center">
          <p className="text-stone-500 text-sm italic">
            © {new Date().getFullYear()} Denise Liana P. Ho. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}