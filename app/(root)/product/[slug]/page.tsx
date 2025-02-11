import { notFound } from "next/navigation";
import { getProductByslug } from "@/lib/actions/product.action";
import { Badge } from "@/components/ui/badge";
import ProductPrice from "@/components/shared/product/product-price";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProductImages from "@/components/shared/product/product-images";


const ProductDetailsPage = async (props: {
    params: Promise<{ slug: string }>
}) => {
    const { slug } = await props.params
    const product = await getProductByslug(slug)
    if (!product) notFound();
    return <>
        <section>
            <div className="grid grid-cols-1 md:grid-cols-5">
                {/* Images colum */}
                <div className="col-span-2">
                    {/* <Image component> */}
                    <ProductImages images={product.images} />
                </div>
                {/* details column */}
                <div className="col-span-2 p-5">
                    <div className="flex flex-col gap-6">
                        <p>{product.brand}{product.category}</p>
                        <h1 className="h3-bold">{product.name}</h1>
                        <p>{product.rating} of {product.numReviews} Reviews</p>
                        <div className="flex flex-col sm:flex-row sm:items-center">
                            <ProductPrice value={Number(product.price)}
                                className="w-24 text-green-700 bg-green-100 rounded-full px-5 py-2" />
                        </div>
                    </div>
                    <div className="mt-10">
                        <p className="font-semibold">Description</p>
                        <p>{product.description}</p>
                    </div>
                </div>
                <div>
                    <Card>
                        <CardContent className="p-4">
                            <div className="mb-2 flex justify-between">
                                <div>Price</div>
                                <div>
                                    <ProductPrice value={Number(product.price)} />
                                </div>
                            </div>
                            <div className="mb-2 flex justify-between">
                                <div>Status</div>
                                {product.stock > 0 ? (<Badge variant='outline'>
                                    In Stock
                                </Badge>) : (
                                    <Badge variant='destructive'>Out of Stock</Badge>
                                )}
                            </div>
                            {product.stock > 0 && (
                                <div className="flex justify-center">
                                    <Button className="w-full">Add to Card</Button>
                                </div>

                            )}
                        </CardContent>
                    </Card>

                </div>

            </div>

        </section >


    </>;
}

export default ProductDetailsPage;