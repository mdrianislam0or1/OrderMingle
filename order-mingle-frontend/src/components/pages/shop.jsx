import { Button } from "../ui/Button";

export default function Shop() {
  return (
    <>
      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <img
              alt="Featured Product"
              className="mx-auto 
                order-last 
                w-full h-96 object-cover
              aspect-video overflow-hidden 
              rounded-sm object-bottom sm:w-full
               lg:order-last lg:aspect-square"
              src="https://images.unsplash.com/photo-1592840054664-6bc0f6fbc3d6?q=80&w=2142&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Discover Our Best Sellers
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Explore our collection of top-rated products. High-quality,
                  curated just for you.
                </p>
              </div>
              <div>
                <Button variant="outline">Explore Shop</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 grid grid-cols-3 gap-4">
        {/* <Card>
          <CardHeader>
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1581605545281-77c727173bab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=50&width=50" />
            </Avatar>
            <h2 className="text-lg font-bold">Product 1</h2>
            <Badge>$50.00</Badge>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">
              This is a brief description of Product 1
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Learn more</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1581605545281-77c727173bab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=50&width=50" />
            </Avatar>
            <h2 className="text-lg font-bold">Product 2</h2>
            <Badge>$75.00</Badge>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">
              This is a brief description of Product 2
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Learn more</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1581605545281-77c727173bab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=50&width=50" />
              <AvatarFallback>Product 3</AvatarFallback>
            </Avatar>
            <h2 className="text-lg font-bold">Product 3</h2>
            <Badge>$90.00</Badge>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">
              This is a brief description of Product 3
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Learn more</Button>
          </CardFooter>
        </Card> */}
      </section>
    </>
  );
}
