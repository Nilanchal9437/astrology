// import Footer from "@/src/components/Footer";
// import Navbar from "@/src/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <Navbar /> */}
      {children} 
      {/* <Footer /> */}
    </>
  );
}
