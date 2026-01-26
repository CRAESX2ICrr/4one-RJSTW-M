import { useEffect, useState } from "react"

export function useProductPage(slug) {
  const [product, setProduct] = useState(null)
  const [itemImage, setItemImage] = useState(null)
  const [loading, setLoading] = useState(true)

  const [selectedColor, setSelectedColor] = useState(null)
  const [selectedStorage, setSelectedStorage] = useState(null)

  useEffect(() => {
    async function fetchAll() {
      try {
        const [productRes, itemsRes] = await Promise.all([
          fetch(`/api/product/${slug}`),
          fetch(`/api/items?category=phones`)
        ])

        if (!productRes.ok) throw new Error("Product not found")

        const productData = await productRes.json()
        const itemsData = await itemsRes.json()

        const flatItems = itemsData.flatMap(b => b.items)
        const matchedItem = flatItems.find(i => i.slug === slug)

        setProduct(productData)
        setItemImage(matchedItem?.image ?? null)

        setSelectedColor(productData.options.color[0])
        setSelectedStorage(productData.options.storage[0])
      } catch (err) {
        console.error("PRODUCT PAGE ERROR:", err)
        setProduct(null)
      } finally {
        setLoading(false)
      }
    }

    if (slug) fetchAll()
  }, [slug])

  const basePrice =
    selectedStorage && product?.pricing.byStorage[selectedStorage]

  const finalPrice =
    (basePrice ?? 0) + (selectedColor?.priceDelta || 0)

  return {
    product,
    itemImage,
    loading,
    selectedColor,
    setSelectedColor,
    selectedStorage,
    setSelectedStorage,
    finalPrice
  }
}
