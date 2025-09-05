"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye, X, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface Product {
  id: string;
  name: string;
  price: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  image: string;
  description: string;
  category: string;
  orderDate: string;
}

const mockProducts: Product[] = [
  {
    id: "1",
    name: 'MacBook Pro 14"',
    price: 1999,
    status: "processing",
    image: "/macbook-pro-laptop.png",
    description: "Apple MacBook Pro 14-inch with M3 chip, 16GB RAM, 512GB SSD",
    category: "Electronics",
    orderDate: "2024-01-15",
  },
  {
    id: "2",
    name: "iPhone 15 Pro",
    price: 999,
    status: "shipped",
    image: "/iphone-15-pro-smartphone.jpg",
    description: "iPhone 15 Pro with 256GB storage in Natural Titanium",
    category: "Electronics",
    orderDate: "2024-01-14",
  },
  {
    id: "3",
    name: "AirPods Pro",
    price: 249,
    status: "delivered",
    image: "/airpods-pro-wireless-earbuds.jpg",
    description: "AirPods Pro (2nd generation) with MagSafe Charging Case",
    category: "Audio",
    orderDate: "2024-01-12",
  },
  {
    id: "4",
    name: "iPad Air",
    price: 599,
    status: "pending",
    image: "/ipad-air-tablet.jpg",
    description: "iPad Air 10.9-inch with Wi-Fi, 64GB in Space Gray",
    category: "Electronics",
    orderDate: "2024-01-16",
  },
  {
    id: "5",
    name: "Apple Watch Series 9",
    price: 399,
    status: "cancelled",
    image: "/apple-watch-series-9-smartwatch.jpg",
    description: "Apple Watch Series 9 GPS 45mm with Sport Band",
    category: "Wearables",
    orderDate: "2024-01-10",
  },
];

const statusColors = {
  pending:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  processing: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  shipped:
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  delivered:
    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  cancelled: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
};

export function ProductOrders() {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const handleSelectProduct = (productId: string) => {
    setSelectedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleSelectAll = () => {
    const cancellableProducts = products.filter(
      (p) => p.status !== "cancelled" && p.status !== "delivered"
    );
    if (selectedProducts.length === cancellableProducts.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(cancellableProducts.map((p) => p.id));
    }
  };

  const handleCancelProduct = (productId: string) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === productId
          ? { ...product, status: "cancelled" as const }
          : product
      )
    );
    setSelectedProducts((prev) => prev.filter((id) => id !== productId));
    toast.success("Order Cancelled", {
      description: "The product order has been cancelled successfully.",
    });
  };

  const handleCancelSelected = () => {
    setProducts((prev) =>
      prev.map((product) =>
        selectedProducts.includes(product.id)
          ? { ...product, status: "cancelled" as const }
          : product
      )
    );
    toast.success("Orders Cancelled", {
      description: `${selectedProducts.length} product orders have been cancelled.`,
    });
    setSelectedProducts([]);
  };

  const cancellableProducts = products.filter(
    (p) => p.status !== "cancelled" && p.status !== "delivered"
  );
  const canCancelProduct = (status: string) =>
    status !== "cancelled" && status !== "delivered";

  return (
    <div className="space-y-4">
      {selectedProducts.length > 0 && (
        <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
          <span className="text-sm text-muted-foreground">
            {selectedProducts.length} product(s) selected
          </span>
          <Button
            variant="destructive"
            size="sm"
            onClick={handleCancelSelected}
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Cancel Selected
          </Button>
        </div>
      )}

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={
                    selectedProducts.length === cancellableProducts.length &&
                    cancellableProducts.length > 0
                  }
                  onCheckedChange={handleSelectAll}
                  aria-label="Select all products"
                />
              </TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedProducts.includes(product.id)}
                    onCheckedChange={() => handleSelectProduct(product.id)}
                    disabled={!canCancelProduct(product.status)}
                    aria-label={`Select ${product.name}`}
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="h-12 w-12 rounded-md object-cover"
                    />
                    <div>
                      <div className="font-medium">{product.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {product.category}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-medium">
                  ${product.price.toLocaleString()}
                </TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={statusColors[product.status]}
                  >
                    {product.status.charAt(0).toUpperCase() +
                      product.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Product Details</DialogTitle>
                          <DialogDescription>
                            Complete information about this product order
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <img
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              className="h-20 w-20 rounded-lg object-cover"
                            />
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg">
                                {product.name}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {product.category}
                              </p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium">
                                Price
                              </label>
                              <p className="text-lg font-semibold">
                                ${product.price.toLocaleString()}
                              </p>
                            </div>
                            <div>
                              <label className="text-sm font-medium">
                                Status
                              </label>
                              <div className="mt-1">
                                <Badge
                                  variant="secondary"
                                  className={statusColors[product.status]}
                                >
                                  {product.status.charAt(0).toUpperCase() +
                                    product.status.slice(1)}
                                </Badge>
                              </div>
                            </div>
                            <div className="col-span-2">
                              <label className="text-sm font-medium">
                                Order Date
                              </label>
                              <p className="text-sm text-muted-foreground">
                                {product.orderDate}
                              </p>
                            </div>
                          </div>
                          <div>
                            <label className="text-sm font-medium">
                              Description
                            </label>
                            <p className="text-sm text-muted-foreground mt-1">
                              {product.description}
                            </p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleCancelProduct(product.id)}
                      disabled={!canCancelProduct(product.status)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
