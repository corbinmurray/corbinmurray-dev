import { Button, Footer } from "@corbinmurray/ui-components";

export function App() {
  return (
    <div className="flex flex-col gap-4 p-8 items-center justify-center min-h-screen">
      <Button>My Test Button</Button>
      <Footer appName="Testing" />
    </div>
  );
}

export default App;
