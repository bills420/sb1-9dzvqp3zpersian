export default function AboutPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">About Bills Co. LTD</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            At Bills Co. LTD, we're dedicated to delivering excellence across our three core services:
            labour solutions, beautification projects, and web development.
          </p>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 my-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Our Mission</h2>
              <p className="text-muted-foreground">
                To provide exceptional services that transform spaces, empower businesses, and create lasting value for our clients.
              </p>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the leading provider of integrated services, known for innovation, quality, and customer satisfaction.
              </p>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Our Values</h2>
              <p className="text-muted-foreground">
                Excellence, integrity, innovation, and commitment to customer success guide everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}