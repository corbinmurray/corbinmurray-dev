import { AppLayout, Footer, Header } from "@corbinmurray/ui-components";

export function App() {
  const appName = "cm";

  // Provide the header component
  const layoutHeader = (
    <Header
      appName={appName}
      navigationItems={[
        { label: "About Me", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
      ]}
    />
  );

  // Provide the footer component
  const layoutFooter = <Footer />;

  // AppLayout handles all the min-heights, flexbox math, and
  // compensating for the Header's exact fixed height so things don't hide!
  return (
    <AppLayout header={layoutHeader} footer={layoutFooter}>
      <div className="container mx-auto p-4 md:p-6">
        <h1 className="text-2xl font-bold">Welcome to {appName}</h1>
        <p className="mt-4">
          This main content area now safely starts below the header, and
          stretches automatically to push the footer down!
        </p>
      </div>
    </AppLayout>
  );
}

export default App;
