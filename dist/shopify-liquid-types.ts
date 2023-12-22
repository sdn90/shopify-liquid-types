type Untyped = any;
type ShopifyBug = any;
type Unimplemented = any;

/**
 * An abstract media object that can represent the following object types:
 *
 * - [`image`](/docs/api/liquid/objects/image)
 * - [`model`](/docs/api/liquid/objects/model)
 * - [`video`](/docs/api/liquid/objects/video)
 * - [`external_video`](/docs/api/liquid/objects/external_video)
 */
export interface Media {
  /**
   * The ID of the media.
   */
  id: number;
  /**
   * The position of the media in the [`product.media` array](/docs/api/liquid/objects/product#product-media).
   */
  position: number;
  /**
   * The media type.
   */
  media_type: "image" | "model" | "video" | "external_video";
  /**
   * A preview image of the media.
   */
  preview_image: Image;
  /**
   * The alt text of the media.
   */
  alt: string;
}

/**
 * An address, such as a customer address or order shipping address.
 */
export interface Address {
  /**
   * The company of the address.
   */
  company: string;
  /**
   * The phone number of the address.
   */
  phone: string;
  /**
   * The first name of the address.
   */
  first_name: string;
  /**
   * The last name of the address.
   */
  last_name: string;
  /**
   * A combination of the first and last names of the address.
   */
  name: string;
  /**
   * The relative URL for the address.
   */
  url: string;
  /**
   * A summary of the address, including the following properties:
   *
   * - First and last name
   * - First and second lines
   * - City
   * - Province
   * - Country
   */
  summary: string;
  /**
   * The ID of the address.
   */
  id: number;
  /**
   * The first line of the address.
   */
  address1: string;
  /**
   * The second line of the address.
   */
  address2: string;
  /**
   * The city of the address.
   */
  city: string;
  /**
   * The zip or postal code of the address.
   */
  zip: string;
  /**
   * The country of the address in [ISO 3166-1 (alpha 2) format](https://www.iso.org/glossary-for-iso-3166.html).
   */
  country_code: string;
  /**
   * The province of the address in [ISO 3166-2 (alpha 2) format](https://www.iso.org/glossary-for-iso-3166.html).
   */
  province_code: string;
  /**
   * The country of the address.
   */
  country: Country;
  /**
   * A combination of the first and second lines of the address.
   */
  street: string;
  /**
   * The province of the address.
   */
  province: string;
}

/**
 * All of the [collections](/docs/api/liquid/objects/collection) on a store.
 */
export type Collections = Collection[];

/**
 * All of the [pages](/docs/api/liquid/objects/page) on a store.
 */
export type Pages = Page[];

/**
 * All of the products on a store.
 */
export type AllProducts = Product[];

/**
 * An app. This object is usually used to access app-specific information for use with [theme app extensions](/apps/online-store/theme-app-extensions).
 */
export interface App {
  /**
   * The [metafields](/docs/api/liquid/objects/metafield) that are [owned by the app](/apps/metafields/app-owned).
   */
  metafields: ShopifyBug;
}

/**
 * A discount applied to a cart, line item, or order.
 */
export interface Discount {
  /**
   * The amount of the discount in the currency's subunit.
   */
  amount: number;
  /**
   * The amount of the discount in the currency's subunit.
   */
  total_amount: number;
  /**
   * The customer-facing name of the discount.
   */
  code: string;
  /**
   * The customer-facing name of the discount.
   */
  title: string;
  /**
   * The type of the discount.
   */
  type: "FixedAmountDiscount" | "PercentageDiscount" | "ShippingDiscount";
  /**
   * The amount of the discount as a negative value, in the currency's subunit.
   */
  savings: number;
  /**
   * The amount of the discount as a negative value, in the currency's subunit.
   */
  total_savings: number;
}

/**
 * All of the articles across the blogs in the store.
 */
export type Articles = Article[];

/**
 * An article, or [blog post](https://help.shopify.com/manual/online-store/blogs/writing-blogs), in a blog.
 */
export interface Article {
  /**
   * The featured image for the article.
   */
  image: Image;
  /**
   * The full name of the author of the article.
   */
  author: string;
  /**
   * The [metafields](/docs/api/liquid/objects/metafield) applied to the article.
   */
  metafields: Untyped;
  /**
   * The [handle](/docs/api/liquid/basics#handles) of the article.
   */
  handle: string;
  /**
   * The ID of the article.
   */
  id: string;
  /**
   * The title of the article.
   */
  title: string;
  /**
   * The relative URL of the article.
   */
  url: string;
  /**
   * The name of the [custom template](/themes/architecture/templates#alternate-templates) assigned to the article.
   */
  template_suffix: string;
  /**
   * A timestamp for when the article was created.
   */
  created_at: string;
  /**
   * A timestamp for when the article was published.
   */
  published_at: string;
  /**
   * A timestamp for when the article was updated.
   */
  updated_at: string;
  /**
   * Returns `true` if the blog that the article belongs to is set to [moderate comments](https://help.shopify.com/manual/online-store/blogs/managing-comments).
   * Returns `false` if not.
   */
  moderated?: boolean;
  /**
   * The published comments for the article.
   */
  comments: Comment[];
  /**
   * The number of published comments for the article.
   */
  comments_count: number;
  /**
   * Returns `true` if comments are enabled. Returns `false` if not.
   */
  comments_enabled?: boolean;
  /**
   * The relative URL where POST requests are sent when creating new comments.
   */
  comment_post_url: string;
  /**
   * The content of the article.
   */
  content: string;
  /**
   * The excerpt of the article.
   */
  excerpt: string;
  /**
   * Returns the article [excerpt](/docs/api/liquid/objects/article#article-excerpt) if it exists. Returns the article
   * [content](/docs/api/liquid/objects/article#article-content) if no excerpt exists.
   */
  excerpt_or_content: string;
  /**
   * The tags applied to the article.
   */
  tags: String[];
  /**
   * The user associated with the author of the article.
   */
  user: User;
}

/**
 * The content and settings of a [section block](/themes/architecture/sections/section-schema#blocks).
 */
export interface Block {
  /**
   * The ID of the block.
   */
  id: string;
  /**
   * The [settings](/themes/architecture/sections/section-schema#blocks) of the block.
   */
  settings: Untyped;
  /**
   * The type of the block.
   */
  type: string;
  /**
   * The data attributes for the block for use in the theme editor.
   */
  shopify_attributes: string;
}

/**
 * All of the blogs in the store.
 */
export type Blogs = Blog[];

/**
 * Information about a specific [blog](https://help.shopify.com/manual/online-store/blogs/adding-a-blog) in the store.
 */
export interface Blog {
  /**
   * The ID of the blog.
   */
  id: number;
  /**
   * The title of the blog.
   */
  title: string;
  /**
   * The [handle](/docs/api/liquid/basics#handles) of the blog.
   */
  handle: string;
  /**
   * The articles in the blog.
   */
  articles: Article[];
  /**
   * The total number of articles in the blog. This total doesn't include hidden articles.
   */
  articles_count: number;
  /**
   * The [metafields](/docs/api/liquid/objects/metafield) applied to the blog.
   */
  metafields: Metafield[];
  /**
   * The relative URL of the blog.
   */
  url: string;
  /**
   * The name of the [custom template](/themes/architecture/templates#alternate-templates) assigned to the blog.
   */
  template_suffix: string;
  /**
   * All of the tags on the articles in the blog.
   */
  all_tags: String[];
  /**
   * A list of all of the tags on all of the articles in the blog.
   *
   * Unlike [`blog.all_tags`](/docs/api/liquid/objects/blog#blog-all_tags), this property only returns tags of articles that are in the
   * filtered view.
   */
  tags: String[];
  /**
   * Returns `true` if comments are enabled for the blog. Returns `false` if not.
   */
  comments_enabled?: boolean;
  /**
   * Returns `true` if the blog is set to
   * [moderate comments](https://help.shopify.com/manual/online-store/blogs/managing-comments). Returns `false` if not.
   */
  moderated?: boolean;
  /**
   * The next (older) article in the blog.
   */
  next_article: Article;
  /**
   * The previous (newer) article in the blog.
   */
  previous_article: Article;
}

/**
 * The [brand assets](https://help.shopify.com/manual/promoting-marketing/managing-brand-assets) for the store.
 */
export interface Brand {
  /**
   * The slogan for the brand.
   */
  slogan: string;
  /**
   * A short description of the brand.
   */
  short_description: string;
  /**
   * The square logo for the brand, resized to 32x32 px.
   */
  favicon_url: Image;
  /**
   * The square logo for the brand, resized to 32x32 px.
   */
  cover_image: Image;
  /**
   * The default logo for the brand.
   */
  logo: Image;
  /**
   * The square logo for the brand.
   */
  square_logo: Image;
  /**
   * The brand's colors.
   */
  colors: ShopifyBug;
  /**
   * The social links for the brand.
   */
  metafields: ShopifyBug;
}

/**
 * A customer’s cart.
 */
export interface Cart {
  /**
   * Returns `true` if any of the products in the cart require shipping. Returns `false` if not.
   */
  requires_shipping: boolean;
  /**
   * Additional information captured with the cart.
   */
  note: string;
  /**
   * The number of items in the cart.
   */
  item_count: number;
  /**
   * The total price of all of the items in the cart in the currency's subunit, after discounts have been applied.
   */
  total_price: number;
  /**
   * The amount that the customer will be charged at checkout in the currency's subunit.
   */
  checkout_charge_amount: number;
  /**
   * The total price of all of the items in the cart in the currency's subunit, before discounts have been applied.
   */
  original_total_price: number;
  /**
   * The total price of all of the items in the cart in the currency's subunit, after any line item discounts. This
   * doesn't include taxes (unless taxes are included in the prices), cart discounts, or shipping costs.
   */
  items_subtotal_price: number;
  /**
   * The total amount of all discounts (the amount saved) for the cart in the currency's subunit.
   */
  total_discount: number;
  /**
   * The line items in the cart.
   */
  items: LineItem[];
  /**
   * Returns `true` if there are no items in the cart. Return's `false` if there are.
   */
  empty?: boolean;
  /**
   * The currency of the cart.
   */
  currency: ShopifyBug;
  /**
   * The total weight of all of the items in the cart in grams.
   */
  total_weight: number;
  /**
   * The discount applications for the cart.
   */
  discount_applications: DiscountApplication[];
  /**
   * Additional attributes entered by the customer with the cart.
   */
  attributes: Untyped;
  /**
   * The cart-specific discount applications for the cart.
   */
  cart_level_discount_applications: DiscountApplication[];
  /**
   * The discounts applied to the cart.
   */
  discounts: Discount[];
  /**
   * Returns `true` if taxes are included in the prices of products in the cart. Returns `false` if not.
   */
  taxes_included: boolean;
}

/**
 * A [collection](https://help.shopify.com/manual/products/collections) in a store.
 */
export interface Collection {
  /**
   * The [metafields](/docs/api/liquid/objects/metafield) applied to the collection.
   */
  metafields: Metafield[];
  /**
   * The ID of the collection.
   */
  id: number;
  /**
   * The [handle](/docs/api/liquid/basics#handles) of the collection.
   */
  handle: string;
  /**
   * The title of the collection.
   */
  title: string;
  /**
   * The description of the collection.
   */
  description: string;
  /**
   * The name of the [custom template](/themes/architecture/templates#alternate-templates) assigned to the collection.
   */
  template_suffix: string;
  /**
   * The vendor name on a vendor collection page.
   */
  current_vendor: string;
  /**
   * The product type on a product type collection page.
   */
  current_type: string;
  /**
   * The relative URL of the collection.
   */
  url: string;
  /**
   * A timestamp for when the collection was published.
   */
  published_at: string;
  /**
   * The image for the collection.
   */
  image: Image;
  /**
   * The available sorting options for the collection.
   */
  sort_options: SortOption[];
  /**
   * The sort order applied to the collection by the `sort_by` URL parameter.
   */
  sort_by: string;
  /**
   * The default sort order of the collection.
   */
  default_sort_by:
    | "manual"
    | "best-selling"
    | "title-ascending"
    | "price-ascending"
    | "price-descending"
    | "created-ascending"
    | "created-descending";
  /**
   * The next product in the collection. Returns `nil` if there's no next product.
   */
  next_product: Product;
  /**
   * The previous product in the collection. Returns `nil` if there's no previous product.
   */
  previous_product: Product;
  /**
   * The total number of products in the current view of the collection.
   */
  products_count: number;
  /**
   * All of the products in the collection.
   */
  products: Product[];
  /**
   * The total number of products in a collection.
   */
  all_products_count: number;
  /**
   * All of the tags applied to the products in the collection.
   */
  all_tags: String[];
  /**
   * The tags that are currently applied to the collection.
   */
  tags: String[];
  /**
   * All of the product types in a collection.
   */
  all_types: String[];
  /**
   * All of the product vendors in a collection.
   */
  all_vendors: String[];
  /**
   * The [storefront filters](https://help.shopify.com/manual/online-store/themes/customizing-themes/storefront-filters) that
   * have been set up on the collection.
   */
  filters: Filter[];
  /**
   * The featured image for the collection.
   */
  featured_image: Image;
}

/**
 * The colors defined as part of a store's [brand assets](https://help.shopify.com/manual/promoting-marketing/managing-brand-assets).
 */
export interface BrandColor {}

/**
 * A color from a [`color` setting](/themes/architecture/settings/input-settings#color).
 */
export interface Color {
  /**
   * The red component of the color, which is a number between 0 and 255.
   */
  red: number;
  /**
   * The green component of the color, which is a number between 0 and 255.
   */
  green: number;
  /**
   * The blue component of the color, which is a number between 0 and 255.
   */
  blue: number;
  /**
   * The red, green, and blue values of the color, represented as a space-separated string.
   */
  rgb: string;
  /**
   * The red, green, blue, and alpha values of the color, represented as a
   * space-separated string, with a slash before the alpha channel.
   */
  rgba: string;
  /**
   * The hue component of the color, which is a number between 0 and 360.
   */
  hue: number;
  /**
   * The saturation component of the color, which is a number between 0 and 100.
   */
  saturation: number;
  /**
   * The lightness component of the color, which is a number between 0 and 100.
   */
  lightness: number;
  /**
   * The alpha component of the color, which is a decimal number between 0.0 and 1.0.
   */
  alpha: number;
}

/**
 * A color_scheme from a [`color_scheme` setting](/themes/architecture/settings/input-settings#color_scheme).
 */
export interface ColorScheme {
  /**
   * The ID of the color_scheme
   */
  id: string;
  /**
   * The [settings](https://shopify.dev/docs/themes/architecture/settings/input-settings#color_scheme_group) of the color_scheme.
   */
  settings: Untyped;
}

/**
 * A color_scheme_group from a [`color_scheme_group` setting](/themes/architecture/settings/input-settings#color_scheme_group).
 */
export interface ColorSchemeGroup {}

/**
 * The address of a company location.
 */
export interface CompanyAddress {
  /**
   * The attention line of the address.
   */
  attention: string;
  /**
   * The ID of the address.
   */
  id: number;
  /**
   * The first line of the address.
   */
  address1: string;
  /**
   * The second line of the address.
   */
  address2: string;
  /**
   * The city of the address.
   */
  city: string;
  /**
   * The zip or postal code of the address.
   */
  zip: string;
  /**
   * The country of the address in [ISO 3166-1 (alpha 2) format](https://www.iso.org/glossary-for-iso-3166.html).
   */
  country_code: string;
  /**
   * The province of the address in [ISO 3166-2 (alpha 2) format](https://www.iso.org/glossary-for-iso-3166.html).
   */
  province_code: string;
  /**
   * The country of the address.
   */
  country: Country;
  /**
   * A combination of the first and second lines of the address.
   */
  street: string;
  /**
   * The province of the address.
   */
  province: string;
}

/**
 * A company that a [customer](/docs/api/liquid/objects/customer) is purchasing for.
 */
export interface Company {
  /**
   * The ID of the company.
   */
  id: number;
  /**
   * The name of the company.
   */
  name: string;
  /**
   * The company locations that the current customer has access to, or can interact with.
   */
  available_locations: CompanyLocation[];
  /**
   * The [metafields](/docs/api/liquid/objects/metafield) applied to the company.
   */
  metafields: Metafield[];
}

/**
 * A location of the [company](/docs/api/liquid/objects/company) that a [customer](/docs/api/liquid/objects/customer) is purchasing for.
 */
export interface CompanyLocation {
  /**
   * The ID of the location.
   */
  id: number;
  /**
   * The name of the location.
   */
  name: string;
  /**
   * The URL to set the location as the current location for the customer.
   */
  url_to_set_as_current: string;
  /**
   * Returns `true` if the location is currently selected. Returns `false` if not.
   */
  current?: boolean;
  /**
   * The company that the location is associated with.
   */
  company: Company;
  /**
   * The address of the location.
   */
  shipping_address: CompanyAddress;
  /**
   * The tax ID of the location.
   */
  tax_registration_id: number;
  /**
   * The [metafields](/docs/api/liquid/objects/metafield) applied to the company location.
   */
  metafields: Metafield[];
}

/**
 * Dynamically returns all scripts required by Shopify.
 */
export interface ContentForHeader {}

/**
 * A country supported by the store's localization options.
 */
export interface Country {
  /**
   * The name of the country.
   */
  name: string;
  /**
   * The ISO code of the country in [ISO 3166-1 (alpha 2) format](https://www.iso.org/glossary-for-iso-3166.html).
   */
  iso_code: string;
  /**
   * The unit system of the country.
   */
  unit_system: "imperial" | "metric";
  /**
   * The currency used in the country.
   */
  currency: Currency;
  /**
   * The market that includes this country.
   */
  market: Market;
  /**
   * Returns `true` if the country is popular for this shop. Otherwise, returns `false`.
   * This can be useful for sorting countries in a country selector.
   */
  popular?: boolean;
  /**
   * The continent that the country is in.
   */
  continent: string;
  /**
   * The languages that have been added to the market that this country belongs to.
   */
  available_languages: ShopLocale[];
}

/**
 * Information about a currency, like the ISO code and symbol.
 */
export interface Currency {
  /**
   * The [ISO code](https://www.iso.org/iso-4217-currency-codes.html) of the currency.
   */
  iso_code: string;
  /**
   * The symbol of the currency.
   */
  symbol: string;
  /**
   * The name of the currency.
   */
  name: string;
}

/**
 * A [customer](https://help.shopify.com/manual/customers) of the store.
 */
export interface Customer {
  /**
   * The first name of the customer.
   */
  first_name: string;
  /**
   * The last name of the customer.
   */
  last_name: string;
  /**
   * The total number of orders that the customer has placed.
   */
  orders_count: number;
  /**
   * The total amount that the customer has spent on all orders in the currency's subunit.
   */
  total_spent: number;
  /**
   * All of the orders placed by the customer.
   */
  orders: Order[];
  /**
   * The last order placed by the customer, not including test orders.
   */
  last_order: Order;
  /**
   * The full name of the customer.
   */
  name: string;
  /**
   * The email of the customer.
   */
  email: string;
  /**
   * The phone number of the customer.
   */
  phone: string;
  /**
   * Returns `true` if the email associated with the customer is tied to a
   * [customer account](https://help.shopify.com/manual/customers/customer-accounts). Returns `false` if not.
   */
  has_account: boolean;
  /**
   * Returns `true` if the customer accepts marketing. Returns `false` if not.
   */
  accepts_marketing: boolean;
  /**
   * The ID of the customer.
   */
  id: number;
  /**
   * The tags associated with the customer.
   */
  tags: String[];
  /**
   * The default address of the customer.
   */
  default_address: Address;
  /**
   * All of the addresses associated with the customer.
   */
  addresses: Address[];
  /**
   * The number of addresses associated with the customer.
   */
  addresses_count: number;
  /**
   * Returns `true` if the customer is exempt from taxes. Returns `false` if not.
   */
  tax_exempt: boolean;
  /**
   * Returns `true` if the customer is a B2B customer. Returns `false` if not.
   */
  b2b?: boolean;
  /**
   * The company locations that the customer has access to, or can interact with.
   */
  company_available_locations: CompanyLocation[];
  /**
   * The currently selected company location.
   */
  current_location: CompanyLocation;
  /**
   * The company that the customer is purchasing for.
   */
  current_company: Company;
}

/**
 * Information about how a discount affects an item.
 */
export interface DiscountAllocation {
  /**
   * The discount application that applies the discount to the item.
   */
  discount_application: DiscountApplication;
  /**
   * The amount that the item is discounted by in the currency's subunit.
   */
  amount: number;
}

/**
 * Information about the intent of a discount.
 */
export interface DiscountApplication {
  /**
   * The total amount of the discount in the currency's subunit.
   */
  total_allocated_amount: number;
  /**
   * The customer-facing name of the discount.
   */
  title: string;
  /**
   * The value of the discount.
   */
  value: number;
  /**
   * The selection method for line items or shipping lines to be discounted.
   */
  target_selection: "all" | "entitled" | "explicit";
  /**
   * The type of the discount.
   */
  type: "automatic" | "discount_code" | "manual" | "script";
  /**
   * The value type of the discount.
   */
  value_type: "fixed_amount" | "percentage";
  /**
   * The type of item that the discount applies to.
   */
  target_type: "line_item" | "shipping_line";
}

/**
 * Information about an external video from YouTube or Vimeo.
 */
export interface ExternalVideo {
  /**
   * The ID of the video from its external source.
   */
  external_id: string;
  /**
   * The aspect ratio of the video as a decimal.
   */
  aspect_ratio: number;
  /**
   * The service that hosts the video.
   */
  host: "youtube" | "vimeo";
  /**
   * The alt text of the external video.
   */
  alt: string;
  /**
   * The ID of the external video.
   */
  id: number;
  /**
   * The media type of the external video. Always returns `external_video`.
   */
  media_type: string;
  /**
   * The position of the external video in the [`product.media`](/docs/api/liquid/objects/product#product-media) array.
   */
  position: number;
  /**
   * A preview image of the media.
   */
  preview_image: Image;
}

/**
 * A [storefront filter](https://help.shopify.com/manual/online-store/themes/customizing-themes/storefront-filters).
 */
export interface Filter {
  /**
   * The URL parameter for the filter. For example, `filter.v.option.color`.
   */
  param_name: string;
  /**
   * The customer-facing label for the filter.
   */
  label: string;
  /**
   * The logical operator used by the filter.
   * Returns a value only for `boolean` and `list` type filters. Returns `nil` for other types.
   */
  operator: "AND" | "OR";
  /**
   * The type of the filter.
   */
  type: "boolean" | "list" | "price_range";
  /**
   * The values of the filter that are currently active.
   *
   * The array can have values only for `boolean` and `list` type filters.
   */
  active_values: FilterValue[];
  /**
   * The values of the filter that are currently inactive.
   */
  inactive_values: FilterValue[];
  /**
   * The values of the filter.
   *
   * The array can have values only for `boolean` and `list` type filters.
   */
  values: FilterValue[];
  /**
   * The `false` filter value.
   *
   * Returns a value only for `boolean` type filters. Returns `nil` for other types.
   */
  false_value: FilterValue;
  /**
   * The `true` filter value.
   *
   * Returns a value only for `boolean` type filters. Returns `nil` for other types.
   */
  true_value: FilterValue;
  /**
   * The highest filter value.
   *
   * Returns a value only for `price_range` type filters. Returns `nil` for other types.
   */
  max_value: FilterValue;
  /**
   * The lowest filter value.
   *
   * Returns a value only for `price_range` type filters. Returns `nil` for other types.
   */
  min_value: FilterValue;
  /**
   * The highest product price within the collection or search results.
   *
   * Returns a value only for `price_range` type filters. Returns `nil` for other types.
   */
  range_max: number;
  /**
   * The current page URL with the URL parameter related to the filter removed.
   */
  url_to_remove: string;
  /**
   * Describes how to present the filter values.
   *
   * Returns a value only for `list` type filters. Returns `nil` for other types.
   */
  presentation: "swatch" | "text";
}

/**
 * The visual representation of a filter value.
 */
export interface FilterValueDisplay {
  /**
   * The type of visual representation.
   */
  type: "colors" | "image";
  /**
   * The visual representation.
   */
  value: Untyped;
}

/**
 * A specific value of a filter.
 */
export interface FilterValue {
  /**
   * The URL parameter for the parent filter of the filter value.
   */
  param_name: string;
  /**
   * The value for the URL parameter. The `value` is paired with the [`param_name`](#filter_value-param_name) property.
   */
  value: string;
  /**
   * Returns `true` if the value is currently active. Returns `false` if not.
   *
   * Can only return `true` for filters of type `boolean` or `list`.
   */
  active: boolean;
  /**
   * The number of results related to the filter value.
   *
   * Returns a value only for `boolean` and `list` type filters. Returns `nil` for `price_range` type filters.
   */
  count: number;
  /**
   * The customer-facing label for the filter value. For example, `Red` or `Rouge`.
   *
   * Returns a value only for `boolean` and `list` type filters. Returns `nil` for `price_range` type filters.
   */
  label: string;
  /**
   * The current page URL with the filter value parameter added.
   */
  url_to_add: string;
  /**
   * The current page URL with the filter value parameter removed.
   */
  url_to_remove: string;
  /**
   * The visual representation of the filter value.
   */
  display: FilterValueDisplay;
}

/**
 * The focal point for an image.
 */
export interface FocalPoint {
  /**
   * The horizontal position of the focal point, as a percent of the image width. Returns `50` if no focal point is set.
   */
  x: number;
  /**
   * The vertical position of the focal point, as a percent of the image height. Returns `50` if no focal point is set.
   */
  y: number;
}

/**
 * A font from a [`font_picker` setting](/themes/architecture/settings/input-settings#font_picker).
 */
export interface Font {
  /**
   * The family name of the font.
   */
  family: string;
  /**
   * The fallback families of the font.
   */
  fallback_families: string;
  /**
   * The baseline ratio of the font as a decimal.
   */
  baseline_ratio: number;
  /**
   * The weight of the font.
   */
  weight: number;
  /**
   * The style of the font.
   */
  style: string;
  /**
   * The variants in the family of the font.
   */
  variants: Font[];
  /**
   * Returns `true` if the font is a system font. Returns `false` if not.
   */
  system?: boolean;
}

/**
 * Information about a form created by a [`form` tag](/docs/api/liquid/tags/form).
 */
export interface Form {
  /**
   * Any errors from the form.
   */
  errors: FormErrors;
  /**
   * The first address line associated with the address.
   */
  address1: string;
  /**
   * The second address line associated with the address.
   */
  address2: string;
  /**
   * The name of the author of the article comment.
   */
  author: string;
  /**
   * The content of the contact submission or article comment.
   */
  body: string;
  /**
   * The city associated with the address.
   */
  city: string;
  /**
   * The company associated with the address.
   */
  company: string;
  /**
   * The country associated with the address.
   */
  country: string;
  /**
   * The email associated with the form.
   */
  email: string;
  /**
   * The first name associated with the customer or address.
   */
  first_name: string;
  /**
   * The ID of the form.
   */
  id: string;
  /**
   * The last name associated with the customer or address.
   */
  last_name: string;
  /**
   * Returns `true`.
   */
  password_needed: boolean;
  /**
   * The phone number associated with the address.
   */
  phone: string;
  /**
   * Returns `true` if the form was submitted successfully. Returns `false` if there were errors.
   */
  posted_successfully?: boolean;
  /**
   * The province associated with the address.
   */
  province: string;
  /**
   * Renders an HTML checkbox that can submit the address as the customer's default address.
   */
  set_as_default_checkbox: string;
  /**
   * The nickname of the gift card recipient.
   */
  name: string;
  /**
   * The personalized message intended for the recipient.
   */
  message: string;
  /**
   * The zip or postal code associated with the address.
   */
  zip: string;
}

/**
 * An order [fulfillment](https://help.shopify.com/manual/orders/fulfillment), which includes information like the line items
 * being fulfilled and shipment tracking.
 */
export interface Fulfillment {
  /**
   * A timestamp for when the fulfillment was created.
   */
  created_at: string;
  /**
   * The number of items in the fulfillment.
   */
  item_count: number;
  /**
   * The line items in the fulfillment.
   */
  fulfillment_line_items: LineItem[];
  /**
   * The name of the fulfillment service.
   */
  tracking_company: string;
  /**
   * An array of the fulfillment's tracking numbers.
   */
  tracking_numbers: String[];
  /**
   * The fulfillment's tracking number.
   */
  tracking_number: string;
  /**
   * The URL for the fulfillment's tracking number.
   */
  tracking_url: string;
}

/**
 * A file from a `file_reference` type [metafield](/docs/api/liquid/objects/metafield) that is neither an image or video.
 */
export interface GenericFile {
  /**
   * The [CDN URL](/themes/best-practices/performance/platform#shopify-cdn) for the file.
   */
  url: string;
  /**
   * The ID of the file.
   */
  id: number;
  /**
   * The media type of the model. Always returns `generic_file`.
   */
  media_type: string;
  /**
   * A preview image for the file.
   */
  preview_image: Image;
  /**
   * The position of the media in the [`product.media` array](/docs/api/liquid/objects/product#product-media).
   */
  position: number;
  /**
   * The alt text of the media.
   */
  alt: string;
}

/**
 * A [gift card](https://help.shopify.com/manual/products/gift-card-products) that's been issued to a customer or a recipient.
 */
export interface GiftCard {
  /**
   * The remaining balance of the gift card in the currency's subunit.
   */
  balance: number;
  /**
   * The code used to redeem the gift card.
   */
  code: string;
  /**
   * The [ISO code](https://www.iso.org/iso-4217-currency-codes.html) of the currency that the gift card was issued in.
   */
  currency: string;
  /**
   * The customer associated with the gift card.
   */
  customer: Customer;
  /**
   * The recipient associated with the gift card.
   */
  recipient: Recipient;
  /**
   * The personalized message intended for the recipient.
   */
  message: string;
  /**
   * The scheduled date on which the gift card will be sent to the recipient.
   */
  send_on: string;
  /**
   * Returns `true` if the gift card is enabled. Returns `false` if not.
   */
  enabled: boolean;
  /**
   * Returns `true` if the gift card is expired. Returns `false` if not.
   */
  expired: boolean;
  /**
   * A timestamp for when the gift card expires.
   */
  expires_on: string;
  /**
   * The initial balance of the gift card in the currency's subunit.
   */
  initial_value: number;
  /**
   * The URL to view the gift card. This URL is on the `checkout.shopify.com` domain.
   */
  url: string;
  /**
   * The name of the [custom template](/themes/architecture/templates#alternate-templates) assigned to the gift card.
   */
  template_suffix: string;
  /**
   * The [line item properties](/docs/api/liquid/objects/line_item#line_item-properties) assigned to the gift card.
   */
  properties: Untyped[];
  /**
   * A string used to generate a QR code for the gift card.
   */
  qr_identifier: string;
  /**
   * The URL to download the gift card as an Apple Wallet Pass.
   */
  pass_url: string;
  /**
   * The product associated with the gift card.
   */
  product: Product;
  /**
   * The last 4 characters of the code used to redeem the gift card.
   */
  last_four_characters: string;
}

/**
 * An image, such as a product or collection image.
 */
export interface Image {
  /**
   * The presentation settings for the image.
   */
  presentation: ImagePresentation;
  /**
   * The relative URL of the image.
   */
  src: string;
  /**
   * The width of the image in pixels.
   */
  width: number;
  /**
   * The height of the image in pixels.
   */
  height: number;
  /**
   * The aspect ratio of the image as a decimal.
   */
  aspect_ratio: number;
  /**
   * The alt text of the image.
   */
  alt: string;
  /**
   * Returns `true` if the image is associated with a variant. Returns `false` if not.
   */
  attached_to_variant?: boolean;
  /**
   * The ID of the image.
   */
  id: number;
  /**
   * The media type of the image. Always returns `image`.
   */
  media_type: string;
  /**
   * The position of the image in the [`product.images`](/docs/api/liquid/objects/product#product-images) or [`product.media`](/docs/api/liquid/objects/product#product-media)
   * array.
   */
  position: number;
  /**
   * A preview image for the image.
   */
  preview_image: Image;
  /**
   * The ID of the product that the image is associated with.
   */
  product_id: number;
  /**
   * The product variants that the image is associated with.
   */
  variants: Variant[];
}

/**
 * The presentation settings for an image.
 */
export interface ImagePresentation {
  /**
   * The focal point for the image.
   */
  focal_point: FocalPoint;
}

/**
 * All of the [images](/docs/api/liquid/objects/image) that have been [uploaded](https://help.shopify.com/manual/online-store/images/theme-images#upload-images)
 * to a store.
 */
export type Images = Image[];

/**
 * A line in a cart, checkout, or order. Each line item represents a product variant.
 */
export interface LineItem {
  /**
   * The ID of the line item.
   */
  id: number;
  /**
   * The quantity of the line item.
   */
  quantity: number;
  /**
   * The price of the line item in the currency's subunit. This includes any discounts from [Shopify Scripts](https://help.shopify.com/manual/checkout-settings/script-editor).
   */
  price: number;
  /**
   * The combined price, in the currency's subunit, of all of the items in a line item. This includes any discounts from [Shopify Scripts](https://help.shopify.com/manual/checkout-settings/script-editor).
   */
  line_price: number;
  /**
   * The total amount, in the currency's subunit, of any discounts applied to the line item by [Shopify Scripts](https://help.shopify.com/manual/checkout-settings/script-editor).
   */
  total_discount: number;
  /**
   * The discount allocations that apply to the line item.
   */
  discount_allocations: DiscountAllocation[];
  /**
   * The price of the line item in the currency's subunit. This includes any line-level discounts.
   */
  final_price: number;
  /**
   * The combined price, in the currency's subunit, of all of the items in the line item. This includes any line-level discounts.
   */
  final_line_price: number;
  /**
   * The [ID](/docs/api/liquid/objects/variant#variant-id) of the line item's variant.
   */
  variant_id: number;
  /**
   * The [ID](/docs/api/liquid/objects/product#product-id) of the line item's product.
   */
  product_id: number;
  /**
   * The product associated with the line item.
   */
  product: Product;
  /**
   * The variant associated with the line item.
   */
  variant: Variant;
  /**
   * The tax lines for the line item.
   */
  tax_lines: TaxLine[];
  /**
   * The fulfillment of the line item.
   */
  fulfillment: Fulfillment;
  /**
   * The number of items from the line item that have been successfully fulfilled.
   */
  successfully_fulfilled_quantity: number;
  /**
   * The [fulfillment service](https://help.shopify.com/manual/shipping/understanding-shipping/dropshipping-and-fulfillment-services)
   * for the vartiant associated with the line item. If there's no fulfillment service, then `manual` is returned.
   */
  fulfillment_service: string;
  /**
   * The properties of the line item.
   */
  properties: Untyped[];
  /**
   * The unit price measurement of the line item.
   */
  unit_price_measurement: UnitPriceMeasurement;
  /**
   * The [unit price](https://help.shopify.com/manual/intro-to-shopify/initial-setup/sell-in-france/price-per-unit#add-unit-prices-to-your-product)
   *  of the line item in the currency's subunit.
   */
  unit_price: number;
  /**
   * The [sku](/docs/api/liquid/objects/variant#variant-sku) of the variant associated with the line item.
   */
  sku: string;
  /**
   * Information about the discounts that have affected the line item.
   */
  message: string;
  /**
   * The vendor of the variant associated with the line item.
   */
  vendor: string;
  /**
   * The title of the line item. The title is a combination of `line_item.product.title` and `line_item.variant.title`, separated
   * by a hyphen.
   */
  title: string;
  /**
   * Returns `true` if taxes should be charged on the line item. Returns `false` if not.
   */
  taxable: boolean;
  /**
   * The price of the line item in the currency's subunit, before discounts have been applied.
   */
  original_price: number;
  /**
   * The combined price of all of the items in a line item in the currency's subunit, before any discounts have been applied.
   */
  original_line_price: number;
  /**
   * The total amount of any discounts applied to the line item in the currency's subunit.
   */
  line_level_total_discount: number;
  /**
   * The discount allocations that apply directly to the line item.
   */
  line_level_discount_allocations: DiscountAllocation[];
  /**
   * The discounts applied to the line item.
   */
  discounts: Discount[];
  /**
   * Returns `true` if the product associated with the line item is a gift card. Returns `false` if not.
   */
  gift_card: boolean;
  /**
   * Returns `true` if the variant associated with the line item requires shipping. Returns `false` if not.
   */
  requires_shipping: boolean;
  /**
   * The name and value pairs for each option of the variant associated with the line item.
   */
  options_with_values: Untyped[];
  /**
   * The key of the line item.
   */
  key: string;
  /**
   * The weight of the line item in the store's [default weight unit](https://help.shopify.com/manual/intro-to-shopify/initial-setup/setup-business-settings#set-or-change-your-stores-default-weight-unit).
   */
  grams: number;
  /**
   * The relative URL of the variant associated with the line item.
   */
  url: string;
  /**
   * A URL to remove the line item from the cart.
   */
  url_to_remove: string;
  /**
   * The image of the line item.
   */
  image: Image;
  /**
   * The selling plan allocation of the line item. If the line item doesn't have a selling plan allocation, then `nil` is returned.
   */
  selling_plan_allocation: SellingPlanAllocation;
  /**
   * The components of a line item.
   */
  item_components: LineItem[];
}

/**
 * A link in a [menu](https://help.shopify.com/manual/online-store/menus-and-links/drop-down-menus).
 */
export interface Link {
  /**
   * Returns `true` if the link is active. Returns `false` if not.
   */
  active: boolean;
  /**
   * Returns `true` if the current URL path matches the [URL](/docs/api/liquid/objects/link#link-url) of the link. Returns `false` if not.
   */
  current: boolean;
  /**
   * Returns `true` if a link's child link is active. Returns `false` if not.
   */
  child_active: boolean;
  /**
   * Returns `true` if current URL path matches a link's child link [URL](/docs/api/liquid/objects/link#link-url). Returns `false` if not.
   */
  child_current: boolean;
  /**
   * The [handle](/docs/api/liquid/basics#handles) of the link.
   */
  handle: string;
  /**
   * The child links of the link.
   */
  links: Link[];
  /**
   * The object associated with the link.
   */
  object: Untyped;
  /**
   * The title of the link.
   */
  title: string;
  /**
   * The type of the link.
   */
  type:
    | "article_link"
    | "blog_link"
    | "catalog_link"
    | "collection_link"
    | "collections_link"
    | "frontpage_link"
    | "http_link"
    | "metaobject_link"
    | "page_link"
    | "policy_link"
    | "product_link"
    | "search_link";
  /**
   * The number of nested levels under the link.
   */
  levels: number;
  /**
   * The URL of the link.
   */
  url: string;
}

/**
 * All of the [menus](https://help.shopify.com/manual/online-store/menus-and-links/drop-down-menus) in a store.
 */
export type Linklists = Linklist[];

/**
 * A [menu](https://help.shopify.com/manual/online-store/menus-and-links/drop-down-menus) in a store.
 */
export interface Linklist {
  /**
   * The links in the menu.
   */
  links: Link[];
  /**
   * The [handle](/docs/api/liquid/basics#handles) of the menu.
   */
  handle: string;
  /**
   * The number of nested levels in the menu.
   */
  levels: number;
  /**
   * The title of the menu.
   */
  title: string;
}

/**
 * Information about a parent [`for` loop](/docs/api/liquid/tags/for).
 */
export interface Forloop {
  /**
   * The total number of iterations in the loop.
   */
  length: number;
  /**
   * The parent `forloop` object.
   */
  parentloop: Forloop;
  /**
   * The 1-based index of the current iteration.
   */
  index: number;
  /**
   * The 0-based index of the current iteration.
   */
  index0: number;
  /**
   * The 1-based index of the current iteration, in reverse order.
   */
  rindex: number;
  /**
   * The 0-based index of the current iteration, in reverse order.
   */
  rindex0: number;
  /**
   * Returns `true` if the current iteration is the first. Returns `false` if not.
   */
  first: boolean;
  /**
   * Returns `true` if the current iteration is the last. Returns `false` if not.
   */
  last: boolean;
}

/**
 * Information about a parent [`tablerow` loop](/docs/api/liquid/tags/tablerow).
 */
export interface Tablerowloop {
  /**
   * The total number of iterations in the loop.
   */
  length: number;
  /**
   * The 1-based index of the current column.
   */
  col: number;
  /**
   * The 1-based index of current row.
   */
  row: number;
  /**
   * The 1-based index of the current iteration.
   */
  index: number;
  /**
   * The 0-based index of the current iteration.
   */
  index0: number;
  /**
   * The 0-based index of the current column.
   */
  col0: number;
  /**
   * The 1-based index of the current iteration, in reverse order.
   */
  rindex: number;
  /**
   * The 0-based index of the current iteration, in reverse order.
   */
  rindex0: number;
  /**
   * Returns `true` if the current iteration is the first. Returns `false` if not.
   */
  first: boolean;
  /**
   * Returns `true` if the current iteration is the last. Returns `false` if not.
   */
  last: boolean;
  /**
   * Returns `true` if the current column is the first in the row. Returns `false` if not.
   */
  col_first: boolean;
  /**
   * Returns `true` if the current column is the last in the row. Returns `false` if not.
   */
  col_last: boolean;
}

/**
 * Information about the countries and languages that are available on a store.
 */
export interface Localization {
  /**
   * The countries that are available on the store.
   */
  available_countries: Country[];
  /**
   * The languages that are available on the store.
   */
  available_languages: ShopLocale[];
  /**
   * The currently selected market on the storefront.
   */
  market: Market;
  /**
   * The currently selected country on the storefront.
   */
  country: Country;
  /**
   * The currently selected language on the storefront.
   */
  language: ShopLocale;
}

/**
 * A store [location](https://help.shopify.com/manual/locations).
 */
export interface Location {
  /**
   * The location's ID.
   */
  id: number;
  /**
   * The location's name.
   */
  name: string;
  /**
   * The location's address.
   */
  address: Address;
  /**
   * The latitude of the location's address.
   */
  latitude: number;
  /**
   * The longitude of the location's address.
   */
  longitude: number;
  /**
   * The [metafields](/docs/api/liquid/objects/metafield) applied to the location.
   */
  metafields: Untyped;
}

/**
 * A group of one or more regions of the world that a merchant is targeting for sales.
 */
export interface Market {
  /**
   * The ID of the market.
   */
  id: string;
  /**
   * The [handle](/docs/api/liquid/basics#handles) of the market.
   */
  handle: string;
  /**
   * The [metafields](/docs/api/liquid/objects/metafield) applied to the market.
   */
  metafields: Metafield[];
}

/**
 * A measurement from one of the following metafield types:
 *
 * - `dimension`
 * - `volume`
 * - `weight`
 */
export interface Measurement {
  /**
   * The measurement type.
   */
  type: "dimension" | "volume" | "weight";
  /**
   * The measurement value.
   */
  value: number;
  /**
   * The measurement unit.
   */
  unit: string;
}

/**
 * A [metafield](/apps/metafields) attached to a parent object.
 */
export interface Metafield {
  /**
   * The value of the metafield.
   */
  value: Untyped;
  /**
   * The [type](/apps/metafields/types) of the metafield.
   */
  type:
    | "single_line_text_field"
    | "multi_line_text_field"
    | "rich_text_field"
    | "product_reference"
    | "collection_reference"
    | "variant_reference"
    | "page_reference"
    | "file_reference"
    | "number_integer"
    | "number_decimal"
    | "date"
    | "date_time"
    | "url_reference"
    | "json"
    | "boolean"
    | "color"
    | "weight"
    | "volume"
    | "dimension"
    | "rating"
    | "money";
  /**
   * Returns `true` if the metafield is a list type. Returns `false` if not.
   */
  list?: boolean;
}

/**
 * A `metaobject_definition` defines the structure of a metaobject type for the store, which consists of
 * a merchant-defined set of [field definitions](https://help.shopify.com/en/manual/metafields/metafield-definitions).
 */
export interface MetaobjectDefinition {
  /**
   * The [metaobjects](/docs/api/liquid/objects#metaobject) that follow the definition.
   */
  values: Metaobject[];
  /**
   * The total number of entries for the metaobject definition.
   */
  values_count: number;
}

/**
 * A metaobject entry, which includes the values for a set of [fields](/docs/api/liquid/objects#metafield).
 * The set is defined by the parent [`metaobject_definition`](/docs/api/liquid/objects#metaobject_definition).
 */
export interface Metaobject {
  /**
   * Basic information about the metaobject. These properties are grouped under the `system` object to avoid collisions between system property names and user-defined metaobject fields.
   */
  system: MetaobjectSystem;
}

/**
 * Basic information about a [`metaobject`](/api/liquid/objects#metaobject). These properties are grouped under the `system` object to avoid collisions between system property names and user-defined metaobject fields.
 */
export interface MetaobjectSystem {
  /**
   * The type of the metaobject definition.
   */
  type: string;
  /**
   * The unique [handle](/api/liquid/basics#handles) of the metaobject.
   */
  handle: string;
  /**
   * The ID of the metaobject.
   */
  id: number;
  /**
   * The relative URL of the metaobject.
   */
  url: string;
}

/**
 * A 3D model uploaded as product media.
 */
export interface Model {
  /**
   * The source files for the model.
   */
  sources: ModelSource[];
  /**
   * The alt text of the model.
   */
  alt: string;
  /**
   * The ID of the model.
   */
  id: number;
  /**
   * The media type of the model. Always returns `model`.
   */
  media_type: string;
  /**
   * The position of the model in the [`product.media`](/docs/api/liquid/objects/product#product-media) array.
   */
  position: number;
  /**
   * A preview image for the model.
   */
  preview_image: Image;
}

/**
 * A model source file.
 */
export interface ModelSource {
  /**
   * The format of the model source file.
   */
  format: string;
  /**
   * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the model source file.
   */
  mime_type: string;
  /**
   * The [CDN URL](/themes/best-practices/performance/platform#shopify-cdn) of the model source file.
   */
  url: string;
}

/**
 * A money value, in the the customer's local (presentment) currency.
 */
export interface Money {
  /**
   * The customer's local (presentment) currency.
   */
  currency: Currency;
}

/**
 * An [order](https://help.shopify.com/manual/orders).
 */
export interface Order {
  /**
   * The discounts on the order.
   */
  discounts: Discount;
  /**
   * The attributes on the order.
   */
  attributes: Untyped;
  /**
   * The reason that the order was cancelled.
   */
  cancel_reason:
    | "customer"
    | "declined"
    | "fraud"
    | "inventory"
    | "staff"
    | "other";
  /**
   * The localized version of the [cancellation reason](/docs/api/liquid/objects/order#order-cancel_reason) for the order.
   */
  cancel_reason_label: string;
  /**
   * Returns `true` if the order was cancelled. Returns `false` if not.
   */
  cancelled: boolean;
  /**
   * A timestamp for when the order was cancelled.
   */
  cancelled_at: string;
  /**
   * The discount applications that apply at the order level.
   */
  cart_level_discount_applications: DiscountApplication[];
  /**
   * A timestamp for when the order was created.
   */
  created_at: string;
  /**
   * The sum of all duties applied to the line items in the order in the currency's subunit.
   */
  total_duties: number;
  /**
   * The URL for the customer to view the order in their account.
   */
  customer_url: string;
  /**
   * The customer that placed the order.
   */
  customer: Customer;
  /**
   * All of the discount applications for the order and its line items.
   */
  discount_applications: DiscountApplication[];
  /**
   * The total amount of all discounts applied to the order in the currency's subunit.
   */
  total_discounts: number;
  /**
   * The net amount of the order in the currency's subunit.
   */
  total_net_amount: number;
  /**
   * The total amount of taxes applied to the order in the currency's subunit.
   */
  tax_price: number;
  /**
   * The total amount that's been refunded from the order in the currency's subunit.
   */
  total_refunded_amount: number;
  /**
   * The email that's associated with the order.
   */
  email: string;
  /**
   * The order's financial status.
   */
  financial_status:
    | "authorized"
    | "expired"
    | "paid"
    | "partially_paid"
    | "partially_refunded"
    | "pending"
    | "refunded"
    | "unpaid"
    | "voided";
  /**
   * The localized version of the [financial status](/docs/api/liquid/objects/order#order-financial_status) of the order.
   */
  financial_status_label: ShopifyBug;
  /**
   * The fulfillment status of the order.
   */
  fulfillment_status: string;
  /**
   * The localized version of the [fulfillment status](/docs/api/liquid/objects/order#order-fulfillment_status) of the order.
   */
  fulfillment_status_label:
    | "complete"
    | "fulfilled"
    | "partial"
    | "restocked"
    | "unfulfilled";
  /**
   * The ID of the order.
   */
  id: string;
  /**
   * The [metafields](/docs/api/liquid/objects/metafield) applied to the order.
   */
  metafields: Untyped;
  /**
   * The name of the order.
   */
  name: string;
  /**
   * The note on the order.
   */
  note: string;
  /**
   * A randomly generated alpha-numeric identifier for the order that may be shown to the customer
   * instead of the sequential order name. For example, "XPAV284CT", "R50KELTJP" or "35PKUN0UJ".
   * This value isn't guaranteed to be unique.
   */
  confirmation_number: string;
  /**
   * The integer representation of the order [name](/docs/api/liquid/objects/order#order-name).
   */
  order_number: number;
  /**
   * The URL for the [**Order status** page](https://help.shopify.com/manual/orders/status-tracking) for the order.
   */
  order_status_url: string;
  /**
   * The URL for the new order details page.
   */
  customer_order_url: string;
  /**
   * The phone number associated with the order.
   */
  phone: string;
  /**
   * The shipping address of the order.
   */
  shipping_address: Address;
  /**
   * The billing address of the order.
   */
  billing_address: Address;
  /**
   * The [tags](https://help.shopify.com/manual/shopify-admin/productivity-tools/using-tags) on the order.
   */
  tags: String[];
  /**
   * The tax lines on the order.
   */
  tax_lines: TaxLine[];
  /**
   * The transactions of the order.
   */
  transactions: Transaction[];
  /**
   * The line items in the order.
   */
  line_items: LineItem[];
  /**
   * The non-tip line items in the order.
   */
  subtotal_line_items: LineItem[];
  /**
   * The number of items in the order.
   */
  item_count: number;
  /**
   * The shipping methods for the order.
   */
  shipping_methods: ShippingMethod[];
  /**
   * The sum of the prices of all of the line items in the order in the currency's subunit, after any line item discounts have
   * been applied.
   */
  line_items_subtotal_price: number;
  /**
   * The sum of the prices of the [subtotal line items](/docs/api/liquid/objects/order#order-subtotal_line_items) in the currency's subunit, after any line item or
   * cart discounts have been applied.
   */
  subtotal_price: number;
  /**
   * The total price of the order in the currency's subunit.
   */
  total_price: number;
  /**
   * The shipping price of the order in the currency's subunit.
   */
  shipping_price: number;
  /**
   * Returns `true` if the order is a store pickup order.
   */
  pickup_in_store?: boolean;
}

/**
 * A [page](https://help.shopify.com/manual/online-store/themes/theme-structure/pages) on a store.
 */
export interface Page {
  /**
   * The ID of the page.
   */
  id: number;
  /**
   * The author of the page.
   */
  author: string;
  /**
   * The [handle](/docs/api/liquid/basics#handles) of the page.
   */
  handle: string;
  /**
   * The title of the page.
   */
  title: string;
  /**
   * The name of the [custom template](/themes/architecture/templates#alternate-templates) assigned to the page.
   */
  template_suffix: string;
  /**
   * The content of the page.
   */
  content: string;
  /**
   * The relative URL of the page.
   */
  url: string;
  /**
   * The [metafields](/docs/api/liquid/objects/metafield) applied to the page.
   */
  metafields: Untyped;
  /**
   * A timestamp for when the page was published.
   */
  published_at: string;
}

/**
 * Information about the pagination inside a set of [`paginate` tags](/docs/api/liquid/tags/paginate).
 */
export interface Paginate {
  /**
   * The number of items displayed per page.
   */
  page_size: number;
  /**
   * The total number of items on pages previous to the current page.
   */
  current_offset: number;
  /**
   * The page number of the current page.
   */
  current_page: number;
  /**
   * The total number of items to be paginated.
   */
  items: number;
  /**
   * The pagination parts.
   */
  parts: Part[];
  /**
   * The pagination part to go to the next page.
   */
  next: Part;
  /**
   * The pagination part to go to the previous page.
   */
  previous: Part;
  /**
   * The total number of pages.
   */
  pages: number;
  /**
   * The URL parameter denoting the pagination.
   */
  page_param: string;
}

/**
 * Information about the results from a predictive search query through the
 * [Predictive Search API](/api/ajax/reference/predictive-search#get-locale-search-suggest).
 */
export interface PredictiveSearch {
  /**
   * Returns `true` when being referenced inside a section that's been rendered using the Predictive Search API and
   * the Section Rendering API. Returns `false` if not.
   */
  performed: boolean;
  /**
   * The resources associated with the query.
   */
  resources: PredictiveSearchResources;
  /**
   * The entered search terms.
   */
  terms: string;
  /**
   * The object types that the search was performed on.
   */
  types: String[];
}

/**
 * Information about how a selling plan changes the price of a variant for a given period of time.
 */
export interface SellingPlanPriceAdjustment {
  /**
   * The number of orders that the price adjustment applies to.
   */
  order_count: number;
  /**
   * The 1-based index of the price adjustment in the [`selling_plan.price_adjustments` array](/docs/api/liquid/objects/selling_plan#selling_plan-price_adjustments).
   */
  position: number;
  /**
   * The type of price adjustment.
   */
  value_type: "percentage" | "fixed_amount" | "price";
  /**
   * The value of the price adjustment as a decimal.
   */
  value: number;
}

/**
 * A [product](https://help.shopify.com/manual/products) in the store.
 */
export interface Product {
  /**
   * The variants of the product.
   */
  variants: Variant[];
  /**
   * The images attached to the product.
   */
  images: Image[];
  /**
   * The [metafields](/docs/api/liquid/objects/metafield) applied to the product.
   */
  metafields: Untyped;
  /**
   * The options on the product.
   */
  options_with_values: ProductOption[];
  /**
   * The ID of the product.
   */
  id: number;
  /**
   * The title of the product.
   */
  title: string;
  /**
   * The [handle](/docs/api/liquid/basics#handles) of the product.
   */
  handle: string;
  /**
   * The name of the [custom template](/themes/architecture/templates#alternate-templates) of the product.
   */
  template_suffix: string;
  /**
   * The vendor of the product.
   */
  vendor: string;
  /**
   * The description of the product.
   */
  description: string;
  /**
   * The description of the product.
   */
  content: string;
  /**
   * The first (featured) image attached to the product.
   */
  featured_image: Image;
  /**
   * The first (featured) media attached to the product.
   */
  featured_media: Media;
  /**
   * The media attached to the product, sorted by the date it was added to the product.
   */
  media: Media[];
  /**
   * The lowest price of any variants of the product in the currency's subunit.
   */
  price_min: number;
  /**
   * The lowest price of any variants of the product in the currency's subunit.
   */
  price: number;
  /**
   * The highest price of any variants of the product in the currency's subunit.
   */
  price_max: number;
  /**
   * Returns `true` if the product's variant prices vary. Returns `false` if not.
   */
  price_varies: boolean;
  /**
   * The currently selected or first available variant of the product.
   */
  selected_or_first_available_variant: Variant;
  /**
   * The collections that the product belongs to.
   */
  collections: Collection[];
  /**
   * The currently selected variant of the product.
   */
  selected_variant: Variant;
  /**
   * The first available variant of the product.
   */
  first_available_variant: Variant;
  /**
   * Returns `true` if at least one of the variants of the product is available. Returns `false` if not.
   */
  available: boolean;
  /**
   * The option names of the product.
   */
  options: String[];
  /**
   * The type of the product.
   */
  type: string;
  /**
   * The lowest **compare at** price of any variants of the product in the currency's subunit. This is the same as
   * `product.compare_at_price`.
   */
  compare_at_price_min: number;
  /**
   * The highest **compare at** price of any variants of the product in the currency's subunit.
   */
  compare_at_price_max: number;
  /**
   * The lowest **compare at** price of any variants of the product in the currency's subunit.
   */
  compare_at_price: number;
  /**
   * Returns `true` if the variant **compare at** prices of the product vary. Returns `false` if not.
   */
  compare_at_price_varies: boolean;
  /**
   * The relative URL of the product.
   */
  url: string;
  /**
   * The [tags](https://help.shopify.com/manual/shopify-admin/productivity-tools/using-tags) of the product.
   */
  tags: String[];
  /**
   * A timestamp for when the product was published.
   */
  published_at: string;
  /**
   * A timestamp for when the product was created.
   */
  created_at: string;
  /**
   * Allows you to access a specific [product option](/docs/api/liquid/objects/product_option) by its name.
   */
  options_by_name: Untyped;
  /**
   * Returns `true` if the product doesn't have any options. Returns `false` if not.
   */
  has_only_default_variant: boolean;
  /**
   * Returns `true` if the product has at least one variant with quantity price breaks in the current customer context.
   * Returns `false` if not.
   */
  quantity_price_breaks_configured?: boolean;
  /**
   * Returns `true` if all of the variants of the product require a selling plan. Returns `false` if not.
   */
  requires_selling_plan: boolean;
  /**
   * The selling plan groups that the variants of the product are included in.
   */
  selling_plan_groups: SellingPlanGroup[];
  /**
   * The currently selected selling plan.
   */
  selected_selling_plan: SellingPlan;
  /**
   * The currently selected selling plan allocation for the currently selected variant.
   */
  selected_selling_plan_allocation: SellingPlanAllocation;
  /**
   * The currently selected, or first available, selling plan allocation.
   */
  selected_or_first_available_selling_plan_allocation: SellingPlanAllocation;
  /**
   * Returns `true` if the product is a gift card. Returns `false` if not.
   */
  gift_card?: boolean;
}

/**
 * A product option, such as size or color.
 */
export interface ProductOption {
  /**
   * The name of the product option.
   */
  name: string;
  /**
   * The 1-based index of the product option in the [`product.options_with_values` array](/docs/api/liquid/objects/product#product-options_with_values).
   */
  position: number;
  /**
   * The possible values for the product option.
   */
  values: String[];
  /**
   * The currently selected product option value.
   */
  selected_value: string;
}

/**
 * A [product variant](https://help.shopify.com/manual/products/variants).
 */
export interface Variant {
  /**
   * The [metafields](/docs/api/liquid/objects/metafield) applied to the variant.
   */
  metafields: Untyped;
  /**
   * The parent product of the variant.
   */
  product: Product;
  /**
   * Returns `true` if the variant is currently selected. Returns `false` if it's not.
   */
  selected: boolean;
  /**
   * Returns `true` if the variant has been matched by a [storefront filter](https://shopify.dev/themes/navigation-search/filtering/storefront-filtering).
   * Returns `false` if it hasn't.
   */
  matched: boolean;
  /**
   * The ID of the variant.
   */
  id: number;
  /**
   * A concatenation of each variant option, separated by a `/`.
   */
  title: string;
  /**
   * The quantity rule for the variant.
   */
  quantity_rule: QuantityRule;
  /**
   * Returns `quantity_price_break` objects for the variant in the current customer context.
   */
  quantity_price_breaks: QuantityPriceBreak[];
  /**
   * Returns `true` if the variant has any quantity price breaks available in the current customer context.
   * Returns `false` if it doesn't.
   */
  quantity_price_breaks_configured?: boolean;
  /**
   * The price of the variant in the currency's subunit.
   */
  price: number;
  /**
   * The **compare at** price of the variant in the currency's subunit.
   */
  compare_at_price: number;
  /**
   * The selected `selling_plan_allocation`.
   */
  selected_selling_plan_allocation: SellingPlanAllocation;
  /**
   * The `selling_plan_allocation` objects for the variant.
   */
  selling_plan_allocations: SellingPlanAllocation[];
  /**
   * The SKU of the variant.
   */
  sku: string;
  /**
   * The barcode of the variant.
   */
  barcode: string;
  /**
   * Returns `true` if the variant is available. Returns `false` if not.
   */
  available: boolean;
  /**
   * The values of the variant for each [product option](/docs/api/liquid/objects/product_option).
   */
  options: string;
  /**
   * The value of the variant for the first product option.
   */
  option1: string;
  /**
   * The value of the variant for the second product option.
   */
  option2: string;
  /**
   * The value of the variant for the third product option.
   */
  option3: string;
  /**
   * The URL of the variant.
   */
  url: string;
  /**
   * The unit for the weight of the variant.
   */
  weight_unit: string;
  /**
   * The weight of the variant in the unit specified by `variant.weight_unit`.
   */
  weight_in_unit: number;
  /**
   * The weight of the variant in grams.
   */
  weight: number;
  /**
   * The unit price measurement of the variant.
   */
  unit_price_measurement: UnitPriceMeasurement;
  /**
   * The [unit price](https://help.shopify.com/manual/intro-to-shopify/initial-setup/sell-in-france/price-per-unit#add-unit-prices-to-your-product)
   * of the variant in the currency's subunit.
   */
  unit_price: number;
  /**
   * The inventory quantity of the variant.
   */
  inventory_quantity: number;
  /**
   * The inventory management service of the variant.
   */
  inventory_management: string;
  /**
   * Whether the variant should continue to be sold when it's out of stock.
   */
  inventory_policy: "continue" | "deny";
  /**
   * Returns `true` if the variant requires shipping. Returns `false` if it doesn't.
   */
  requires_shipping: boolean;
  /**
   * Returns `true` if taxes should be charged on the variant. Returns `false` if not.
   */
  taxable: boolean;
  /**
   * The image attached to the variant.
   */
  featured_image: Image;
  /**
   * The image attached to the variant.
   */
  image: Image;
  /**
   * The first media object attached to the variant.
   */
  featured_media: Media;
  /**
   * Returns `true` if the variant has incoming inventory. Returns `false` if not.
   */
  incoming: boolean;
  /**
   * The arrival date for the next incoming inventory of the variant.
   */
  next_incoming_date: string;
  /**
   * The store availabilities for the variant.
   */
  store_availabilities: StoreAvailability[];
  /**
   * Returns `true` if the variant is set to require a `selling_plan` when being added to the cart. Returns `false` if not.
   */
  requires_selling_plan: boolean;
}

/**
 * The per-unit price of a variant when purchasing the minimum quantity or more.
 */
export interface QuantityPriceBreak {
  /**
   * The minimum quantity required to qualify for the price break.
   */
  minimum_quantity: number;
  /**
   * The price for the quantity price break once the minimum quantity is met.
   */
  price: number;
}

/**
 * Information for a [`rating` type](/apps/metafields/types) metafield.
 */
export interface Rating {
  /**
   * The rating value.
   */
  rating: number;
  /**
   * The minimum value of the rating scale.
   */
  scale_min: number;
  /**
   * The maximum value of the rating scale.
   */
  scale_max: number;
}

/**
 * A recipient that is associated with a [gift card](https://help.shopify.com/manual/products/gift-card-products).
 */
export interface Recipient {
  /**
   * The nickname of the recipient.
   */
  nickname: string;
  /**
   * The email of the recipient.
   */
  email: string;
  /**
   * The full name of the recipient.
   */
  name: string;
}

/**
 * Product recommendations for a specific product based on sales data, product descriptions, and collection relationships.
 */
export interface Recommendations {
  /**
   * Returns `true` when being referenced inside a section that's been rendered using the Product Recommendations API and
   * the Section Rendering API. Returns `false` if not.
   */
  performed?: boolean;
  /**
   * The recommended products.
   */
  products: Product[];
  /**
   * The number of recommended products.
   */
  products_count: number;
  /**
   * The recommendation intent.
   */
  intent: string;
}

/**
 * Information about the current URL and the associated page.
 */
export interface Request {
  /**
   * Returns `true` if the request is being made from within the theme editor. Returns `false` if not.
   */
  design_mode: boolean;
  /**
   * Returns `true` if the request is being made from within the theme editor's visual section preview. Returns `false` if not.
   */
  visual_preview_mode: boolean;
  /**
   * The type of page being requested.
   */
  page_type:
    | "404"
    | "article"
    | "blog"
    | "captcha"
    | "cart"
    | "collection"
    | "list-collections"
    | "customers/account"
    | "customers/activate_account"
    | "customers/addresses"
    | "customers/login"
    | "customers/order"
    | "customers/register"
    | "customers/reset_password"
    | "gift_card"
    | "index"
    | "metaobject"
    | "page"
    | "password"
    | "policy"
    | "product"
    | "search";
  /**
   * The domain that the request is hosted on.
   */
  host: string;
  /**
   * The protocol and host of the request.
   */
  origin: string;
  /**
   * The path of the request.
   */
  path: string;
  /**
   * The locale of the request.
   */
  locale: ShopLocale;
}

/**
 * The default rule groups for the `robots.txt` file.
 */
export interface Robots {
  /**
   * The rule groups.
   */
  default_groups: Group[];
}

/**
 * A group of rules for the `robots.txt` file.
 */
export interface Group {
  /**
   * The user agent for the group.
   */
  user_agent: UserAgent;
  /**
   * The rules in the group.
   */
  rules: Rule[];
  /**
   * The sitemap for the group.
   */
  sitemap: Sitemap;
}

/**
 * A rule for the `robots.txt` file, which tells crawlers which pages can, or can't, be accessed.
 */
export interface Rule {
  /**
   * The directive of the rule.
   */
  directive: string;
  /**
   * The value of the rule.
   */
  value: string;
}

/**
 * Allows you to generate standard URLs for the storefront.
 */
export interface Routes {
  /**
   * The index (home page) URL.
   */
  root_url: string;
  /**
   * The [account page](https://help.shopify.com/manual/customers/customer-accounts) URL. Redirects to [new customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts) when enabled.
   */
  account_url: string;
  /**
   * The [account login page](/themes/architecture/templates/customers-login) URL. Redirects to [new customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts) when enabled.
   */
  account_login_url: string;
  /**
   * The URL to log a customer out of their account. Redirects to [new customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts) when enabled.
   */
  account_logout_url: string;
  /**
   * The [password recovery page](/themes/architecture/templates/customers-reset-password) URL. Redirects to [new customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts) when enabled.
   */
  account_recover_url: string;
  /**
   * The [account registration page](/themes/architecture/templates/customers-register) URL.
   */
  account_register_url: string;
  /**
   * The [account addresses page](/themes/architecture/templates/customers-addresses) URL. Redirects to [new customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts) when enabled.
   */
  account_addresses_url: string;
  /**
   * The [collection list page](/themes/architecture/templates/list-collections) URL.
   */
  collections_url: string;
  /**
   * The all-products collection page URL.
   */
  all_products_collection_url: string;
  /**
   * The [search page](/themes/architecture/templates/search) URL.
   */
  search_url: string;
  /**
   * The [Predictive Search API](/api/ajax/reference/predictive-search) URL.
   */
  predictive_search_url: string;
  /**
   * The [cart page](/themes/architecture/templates/cart) URL.
   */
  cart_url: string;
  /**
   * The URL for the [`/cart/add` Cart API endpoint](/api/ajax/reference/cart#post-locale-cart-add-js).
   */
  cart_add_url: string;
  /**
   * The URL for the [`/cart/change` Cart API endpoint](/api/ajax/reference/cart#post-locale-cart-change-js).
   */
  cart_change_url: string;
  /**
   * The URL for the [`/cart/clear` Cart API endpoint](/api/ajax/reference/cart#post-locale-cart-clear-js).
   */
  cart_clear_url: string;
  /**
   * The URL for the [`/cart/update` Cart API endpoint](/api/ajax/reference/cart#post-locale-cart-update-js).
   */
  cart_update_url: string;
  /**
   * The [Product Recommendations API](https://shopify.dev/api/ajax/reference/product-recommendations) URL.
   */
  product_recommendations_url: string;
}

/**
 * Information about a Shopify Script.
 */
export interface Script {
  /**
   * The ID of the script.
   */
  id: number;
  /**
   * The name of the script.
   */
  name: string;
}

/**
 * Information about a storefront search query.
 */
export interface Search {
  /**
   * The entered search terms.
   */
  terms: string;
  /**
   * The filters that have been set up on the search page.
   */
  filters: Filter[];
  /**
   * Returns `true` if a search was successfully performed. Returns `false` if not.
   */
  performed: boolean;
  /**
   * The search result items.
   */
  results: Untyped;
  /**
   * The number of results.
   */
  results_count: number;
  /**
   * The available sorting options for the search results.
   */
  sort_options: SortOption[];
  /**
   * The sort order of the search results. This is determined by the `sort_by` URL parameter.
   */
  sort_by: ShopifyBug;
  /**
   * The default sort order of the search results, which is `relevance`.
   */
  default_sort_by: string;
  /**
   * The object types that the search was performed on.
   */
  types: String[];
}

/**
 * The properties and settings of a section.
 */
export interface Section {
  /**
   * The ID of the section.
   */
  id: string;
  /**
   * The [settings](https://shopify.dev/themes/architecture/sections/section-schema#settings) of the section.
   */
  settings: Untyped;
  /**
   * The 1-based index of the current section within its location.
   */
  index: number;
  /**
   * The 0-based index of the current section within its location.
   */
  index0: number;
  /**
   * The scope or context of the section (template, section group, or global).
   */
  location: string;
  /**
   * The blocks of the section.
   */
  blocks: Block[];
}

/**
 * Information about how a specific [selling plan](/apps/subscriptions/selling-plans) affects a line item.
 */
export interface SellingPlanAllocation {
  /**
   * The price of the selling plan allocation in the currency's subunit.
   */
  price: number;
  /**
   * The **compare at** price of the selling plan allocation in the currency's subunit.
   */
  compare_at_price: number;
  /**
   * The selling plan allocation price adjustments.
   */
  price_adjustments: SellingPlanAllocationPriceAdjustment[];
  /**
   * The [unit price](/docs/api/liquid/objects/variant#variant-unit_price) of the variant associated with the selling plan, in the currency's subunit.
   */
  unit_price: number;
  /**
   * The price for each delivery in the selling plan in the currency's subunit.
   */
  per_delivery_price: number;
  /**
   * The selling plan that created the allocation.
   */
  selling_plan: SellingPlan;
  /**
   * The ID of the [`selling_plan_group`](/docs/api/liquid/objects/selling_plan_group) that the selling plan of the allocation belongs to.
   */
  selling_plan_group_id: string;
  /**
   * The amount that the customer will be charged at checkout in the currency's subunit.
   */
  checkout_charge_amount: number;
  /**
   * The remaining amount for the customer to pay, in the currency's subunit.
   */
  remaining_balance_charge_amount: number;
}

/**
 * The resulting price from the intent of the associated [`selling_plan_price_adjustment`](/docs/api/liquid/objects/selling_plan_price_adjustment).
 */
export interface SellingPlanAllocationPriceAdjustment {
  /**
   * The 1-based index of the price adjustment in the
   * [`selling_plan_allocation.price_adjustments` array](/docs/api/liquid/objects/selling_plan_allocation#selling_plan_allocation-price_adjustments).
   */
  position: number;
  /**
   * The price that will be charged for the price adjustment's lifetime, in the currency's subunit.
   */
  price: number;
}

/**
 * Information about how a specific [selling plan](/apps/subscriptions/selling-plans) affects the amount that a
 * customer needs to pay for a line item at checkout.
 */
export interface SellingPlanCheckoutCharge {
  /**
   * The value type of the checkout charge.
   */
  value_type: "percentage" | "price";
  /**
   * The value of the checkout charge.
   */
  value: number;
}

/**
 * Information about the intent of how a specific [selling plan](/apps/subscriptions/selling-plans) affects a line item.
 */
export interface SellingPlan {
  /**
   * The ID of the selling plan.
   */
  id: number;
  /**
   * The name of the selling plan.
   */
  name: string;
  /**
   * The description of the selling plan.
   */
  description: string;
  /**
   * The ID of the [`selling_plan_group`](/docs/api/liquid/objects/selling_plan_group) that the selling plan belongs to.
   */
  group_id: string;
  /**
   * Returns `true` if the selling plan includes multiple deliveries. Returns `false` if not.
   */
  recurring_deliveries: boolean;
  /**
   * The selling plan options.
   */
  options: SellingPlanOption[];
  /**
   * The selling plan price adjustments.
   */
  price_adjustments: SellingPlanPriceAdjustment[];
  /**
   * Returns `true` if the selling plan is currently selected. Returns `false` if not.
   */
  selected: boolean;
  /**
   * The checkout charge of the selling plan.
   */
  checkout_charge: SellingPlanCheckoutCharge;
}

/**
 * Information about a specific group of [selling plans](/apps/subscriptions/selling-plans) that include any of a
 * product's variants.
 */
export interface SellingPlanGroup {
  /**
   * The selling plans in the group.
   */
  selling_plans: SellingPlan[];
  /**
   * The ID of the selling plan group.
   */
  id: number;
  /**
   * The name of the selling plan group.
   */
  name: string;
  /**
   * An optional string provided by an app to identify selling plan groups created by that app.
   */
  app_id: string;
  /**
   * The selling plan group options.
   */
  options: SellingPlanGroupOption[];
  /**
   * Returns `true` if the currently selected selling plan is part of the selling plan group. Returns `false` if not.
   */
  selling_plan_selected: boolean;
}

/**
 * Information about a specific option in a [selling plan group](/docs/api/liquid/objects/selling_plan_group).
 */
export interface SellingPlanGroupOption {
  /**
   * The name of the option.
   */
  name: string;
  /**
   * The 1-based index of the option in the [`selling_plan_group.options` array](/docs/api/liquid/objects/selling_plan_group#selling_plan_group-options).
   */
  position: number;
  /**
   * The values of the option.
   */
  values: String[];
  /**
   * The option value of the currently selected selling plan.
   */
  selected_value: string;
}

/**
 * Information about a selling plan's value for a specific [`selling_plan_group_option`](/docs/api/liquid/objects/selling_plan_group_option).
 */
export interface SellingPlanOption {
  /**
   * The name of the associated `selling_plan_group_option`.
   */
  name: string;
  /**
   * The 1-based index of the selling plan option in the associated [`selling_plan_group.options` array](/docs/api/liquid/objects/selling_plan_group#selling_plan_group-options).
   */
  position: number;
  /**
   * The value of the selling plan option.
   */
  value: string;
}

/**
 * Information about the shipping method for an order.
 */
export interface ShippingMethod {
  /**
   * The title of the shipping method.
   */
  title: string;
  /**
   * The price of the shipping method in the currency's subunit, before discounts have been applied.
   */
  original_price: number;
  /**
   * The price of the shipping method in the currency's subunit, after discounts have been applied.
   */
  price: number;
  /**
   * The [handle](/docs/api/liquid/basics#handles) of the shipping method.
   */
  handle: string;
  /**
   * The ID of the shipping method.
   */
  id: string;
  /**
   * The tax lines for the shipping method.
   */
  tax_lines: TaxLine[];
  /**
   * The discount allocations that apply to the shipping method.
   */
  discount_allocations: DiscountAllocation[];
}

/**
 * Information about the store, such as the store address, the total number of products, and various settings.
 */
export interface Shop {
  /**
   * The ID of the store.
   */
  id: string;
  /**
   * The name of the store.
   */
  name: string;
  /**
   * The [description](https://help.shopify.com/manual/online-store/setting-up/preferences#edit-the-title-and-meta-description)
   * of the store.
   */
  description: string;
  /**
   * The currencies that the store accepts.
   */
  enabled_currencies: Currency[];
  /**
   * The locales (languages) that are published on the store.
   */
  published_locales: ShopLocale[];
  /**
   * The locales (languages) that are published on the store.
   */
  enabled_locales: ShopLocale[] | ShopLocale[];
  /**
   * The currently active locale (language).
   */
  locale: ShopLocale;
  /**
   * The full URL of the store.
   */
  url: string;
  /**
   * The [sender email](https://help.shopify.com/manual/intro-to-shopify/initial-setup/setup-your-email#change-your-sender-email-address)
   * of the store.
   */
  email: string;
  /**
   * The full URL of the store, with an `https` protocol.
   */
  secure_url: string;
  /**
   * The primary domain of the store.
   */
  domain: string;
  /**
   * The `.myshopify.com` domain of the store.
   */
  permanent_domain: string;
  /**
   * The phone number of the store.
   */
  phone: string;
  /**
   * The password page message of the store.
   */
  password_message: string;
  /**
   * The address of the store.
   */
  address: Address;
  /**
   * Returns `true` if customer accounts are required to complete checkout. Returns `false` if not.
   */
  customer_accounts_enabled: boolean;
  /**
   * Returns `true` if customer accounts are optional to complete checkout. Returns `false` if not.
   */
  customer_accounts_optional: boolean;
  /**
   * The currency of the store.
   */
  currency: string;
  /**
   * The money format of the store.
   */
  money_format: Currency;
  /**
   * The money format of the store with the currency included.
   */
  money_with_currency_format: Currency;
  /**
   * The [metafields](/docs/api/liquid/objects/metafield) applied to the store.
   */
  metafields: ShopifyBug;
  /**
   * The accepted payment types on the store.
   */
  enabled_payment_types: String[];
  /**
   * Returns `true` if prices include taxes. Returns `false` if not.
   */
  taxes_included: boolean;
  /**
   * The refund policy for the store.
   */
  refund_policy: Policy;
  /**
   * The shipping policy for the store.
   */
  shipping_policy: Policy;
  /**
   * The privacy policy for the store.
   */
  privacy_policy: Policy;
  /**
   * The terms of service for the store.
   */
  terms_of_service: Policy;
  /**
   * The subscription policy for the store.
   */
  subscription_policy: Policy;
  /**
   * The policies for the store.
   */
  policies: Policy[];
  /**
   * All of the product vendors for the store.
   */
  vendors: String[];
  /**
   * All of the product types in the store.
   */
  types: String[];
  /**
   * The number of products in the store.
   */
  products_count: number;
  /**
   * The number of collections in the store.
   */
  collections_count: number;
  /**
   * Returns `true` if the store accepts gift cards. Returns `false` if not.
   */
  accepts_gift_cards: boolean;
  /**
   * The [brand assets](https://help.shopify.com/manual/promoting-marketing/managing-brand-assets) for the store.
   */
  brand: Brand;
  /**
   * All of the [metaobjects](/docs/api/liquid/objects/metaobject) of the store.
   */
  metaobjects: ShopifyBug;
}

/**
 * A language in a store.
 */
export interface ShopLocale {
  /**
   * The name of the locale in the store's primary locale.
   */
  name: string;
  /**
   * The name of the locale in the locale itself.
   */
  endonym_name: string;
  /**
   * The ISO code of the locale in [IETF language tag format](https://en.wikipedia.org/wiki/IETF_language_tag).
   */
  iso_code: string;
  /**
   * Returns `true` if the locale is the store's primary locale. Returns `false` if not.
   */
  primary: boolean;
  /**
   * The relative root URL of the locale.
   */
  root_url: string;
}

/**
 * A [store policy](https://help.shopify.com/manual/checkout-settings/refund-privacy-tos), such as a privacy or return policy.
 */
export interface Policy {
  /**
   * The ID of the policy.
   */
  id: string;
  /**
   * The content of the policy.
   */
  body: string;
  /**
   * The relative URL of the policy.
   */
  url: string;
  /**
   * The title of the policy.
   */
  title: string;
}

/**
 * A variant's inventory information for a physical store location.
 */
export interface StoreAvailability {
  /**
   * Returns `true` if the variant has available inventory at the location. Returns `false` if not.
   */
  available: boolean;
  /**
   * Returns `true` if the location has pickup enabled. Returns `false` if not.
   */
  pick_up_enabled: boolean;
  /**
   * The amount of time that it takes for pickup orders to be ready at the location.
   */
  pick_up_time: string;
  /**
   * The location that the variant is stocked at.
   */
  location: Location;
}

/**
 * Information about a tax line of a checkout or order.
 */
export interface TaxLine {
  /**
   * The title of the tax.
   */
  title: string;
  /**
   * The tax amount in the currency's subunit.
   */
  price: number;
  /**
   * The decimal value of the tax rate.
   */
  rate: number;
  /**
   * The decimal value of the tax rate, as a percentage.
   */
  rate_percentage: number;
}

/**
 * Information about the current theme.
 */
export interface Theme {
  /**
   * The ID of the theme.
   */
  id: number;
  /**
   * The name of the theme.
   */
  name: string;
  /**
   * The role of the theme.
   */
  role: "main" | "unpublished" | "demo" | "development";
}

/**
 * Allows you to access all of the theme's settings from the [`settings_schema.json` file](/themes/architecture/config/settings-schema-json).
 */
export interface Settings {}

/**
 * Information about the current [template](/docs/themes/architecture/templates).
 */
export interface Template {
  /**
   * The name of the template's [type](/docs/themes/architecture/templates#template-types).
   */
  name:
    | "404"
    | "article"
    | "blog"
    | "cart"
    | "collection"
    | "list-collections"
    | "customers/account"
    | "customers/activate_account"
    | "customers/addresses"
    | "customers/login"
    | "customers/order"
    | "customers/register"
    | "customers/reset_password"
    | "gift_card"
    | "index"
    | "page"
    | "password"
    | "product"
    | "search";
  /**
   * The custom name of an [alternate template](/themes/architecture/templates#alternate-templates).
   */
  suffix: string;
  /**
   * The name of the template's parent directory.
   */
  directory: string;
}

/**
 * A transaction associated with a checkout or order.
 */
export interface Transaction {
  /**
   * The ID of the transaction.
   */
  id: number;
  /**
   * The name of the transaction.
   */
  name: string;
  /**
   * The status of the transaction.
   */
  status: "success" | "pending" | "failure" | "error";
  /**
   * A timestamp of when the transaction was created.
   */
  created_at: string;
  /**
   * Information from the payment provider about the payment receipt.
   */
  receipt: string;
  /**
   * The type of transaction.
   */
  kind: "authorization" | "capture" | "sale" | "void" | "refund";
  /**
   * The [handleized](/docs/api/liquid/basics#modifying-handles) name of the payment provider used for the transaction.
   */
  gateway: string;
  /**
   * The status of the transaction, translated based on the current locale.
   */
  status_label: string;
  /**
   * The transaction payment details.
   */
  payment_details: TransactionPaymentDetails;
  /**
   * The amount of the transaction in the currency's subunit.
   */
  amount: number;
  /**
   * The name of the payment provider used for the transaction.
   */
  gateway_display_name: string;
  /**
   * Whether the transaction is pending, and whether additional customer info is required to process the payment.
   */
  show_buyer_pending_payment_instructions?: boolean;
  /**
   * A notice that contains instructions for the customer on how to complete their payment.
   * The messages are specific to the payment method used.
   */
  buyer_pending_payment_notice: string;
  /**
   * A list of `pending_payment_instruction_input` header-value pairs, with payment method-specific details.
   * The customer can use these details to complete their purchase offline.
   *
   * If the payment method doesn’t support pending payment instructions, then an empty array is returned.
   *
   * | Supported payment method | Expected Values |
   * | --- | ----------- |
   * | ShopifyPayments - Multibanco | [{header="Entity", value="12345"}, {header="Reference", value="999999999"}] |
   */
  buyer_pending_payment_instructions: PendingPaymentInstructionInput[];
}

/**
 * Information about how units of a product variant are measured. It's used to calculate
 * [unit prices](https://help.shopify.com/manual/intro-to-shopify/initial-setup/sell-in-france/price-per-unit#add-unit-prices-to-your-product).
 */
export interface UnitPriceMeasurement {
  /**
   * The type of unit measurement.
   */
  measured_type: "volume" | "weight" | "dimension";
  /**
   * The quantity of the unit.
   */
  quantity_value: number;
  /**
   * The unit of measurement used to measure the [`quantity_value`](/docs/api/liquid/objects/unit_price_measurement#unit_price_measurement-quantity_value).
   */
  quantity_unit: string;
  /**
   * The quantity of the unit for the base unit price.
   */
  reference_value: number;
  /**
   * The unit of measurement used to measure the [`reference_value`](/docs/api/liquid/objects/unit_price_measurement#unit_price_measurement-reference_value).
   */
  reference_unit: string;
}

/**
 * The author of a blog article.
 */
export interface User {
  /**
   * Returns `true` if the author is the account owner of the store. Returns `false` if not.
   */
  account_owner: boolean;
  /**
   * The bio associated with the author's account.
   */
  bio: string;
  /**
   * The email associated with the author's account.
   */
  email: string;
  /**
   * The first name associated with the author's account.
   */
  first_name: string;
  /**
   * The URL for the personal website associated with the author's account.
   */
  homepage: string;
  /**
   * The image associated with the author's account.
   */
  image: Image;
  /**
   * The last name associated with the author's account.
   */
  last_name: string;
  /**
   * The first and last name associated with the author's account.
   */
  name: string;
}

/**
 * Information about a video uploaded as [product media](/docs/api/liquid/objects/product-media) or a [`file_reference` metafield](/apps/metafields/types).
 */
export interface Video {
  /**
   * The source files for the video.
   */
  sources: VideoSource[];
  /**
   * The duration of the video in milliseconds.
   */
  duration: number;
  /**
   * The aspect ratio of the video as a decimal.
   */
  aspect_ratio: number;
  /**
   * The alt text of the video.
   */
  alt: string;
  /**
   * The ID of the video.
   */
  id: number;
  /**
   * The media type of the model. Always returns `video`.
   */
  media_type: string;
  /**
   * The position of the video in the [`product.media`](/docs/api/liquid/objects/product#product-media) array.
   */
  position: number;
  /**
   * A preview image for the video.
   */
  preview_image: Image;
}

/**
 * Information about the source files for a video.
 */
export interface VideoSource {
  /**
   * The width of the video source file.
   */
  width: number;
  /**
   * The format of the video source file.
   */
  format: "mov" | "mp4" | "m3u8";
  /**
   * The height of the video source file.
   */
  height: number;
  /**
   * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the video source file.
   */
  mime_type: string;
  /**
   * The [CDN URL](/themes/best-practices/performance/platform#shopify-cdn) of the video source file.
   */
  url: string;
}

/**
 * Returns `true` if a store has any payment providers with offsite checkouts, such as PayPal Express Checkout.
 */
export interface AdditionalCheckoutButtons {}

/**
 * Creates an `&lt;option&gt;` tag for each country.
 */
export interface AllCountryOptionTags {}

/**
 * The canonical URL for the current page.
 */
export interface CanonicalUrl {}

/**
 * A customer's checkout.
 */
export interface Checkout {
  /**
   * The gift cards applied to the checkout.
   */
  applied_gift_cards: GiftCard[];
  /**
   * Additional attributes entered by the customer with the [cart](/docs/api/liquid/objects/cart#cart-attributes).
   */
  attributes: Untyped;
  /**
   * The billing address entered at checkout.
   */
  billing_address: Address;
  /**
   * Returns `true` if the customer checks the email marketing subscription checkbox. Returns `false` if not.
   */
  buyer_accepts_marketing: boolean;
  /**
   * Returns `true` if the checkout has been cancelled. Returns `false` if not.
   */
  cancelled: boolean;
  /**
   * The cart-specific discount applications for the checkout.
   */
  cart_level_discount_applications: DiscountApplication[];
  /**
   * The [ISO code](https://www.iso.org/iso-4217-currency-codes.html) of the currency of the checkout.
   */
  currency: string;
  /**
   * The customer associated with the checkout.
   * &gt; Note:
   * &gt; The [`customer` object](/docs/api/liquid/objects/customer) is directly accessible globally when a customer is logged in to their account.
   */
  customer: Customer;
  /**
   * A discount applied to the checkout without being saved.
   */
  discount: Discount;
  /**
   * The discounts applied to the checkout.
   */
  discounts: Discount[];
  /**
   * The discount applications for the checkout.
   */
  discount_applications: DiscountApplication[];
  /**
   * The total amount of the discounts applied to the checkout in the currency's subunit.
   */
  discounts_amount: DiscountApplication[];
  /**
   * The total amount of the discounts applied to the checkout in the currency's subunit, as a negative value.
   */
  discounts_savings: DiscountApplication[];
  /**
   * The email associated with the checkout.
   */
  email: string;
  /**
   * The financial status of the checkout.
   */
  financial_status: string;
  /**
   * A timestamp for the fulfullment of the checkout.
   */
  fulfilled_at: string;
  /**
   * The fulfilled line items from the checkout.
   */
  fulfilled_line_items: LineItem[];
  /**
   * The fulfillment status of the checkout.
   */
  fulfillment_status: string;
  /**
   * The amount of the checkout price paid in gift cards.
   */
  gift_cards_amount: number;
  /**
   * The ID of the checkout.
   */
  id: number;
  /**
   * The line items of the checkout.
   */
  line_items: LineItem[];
  /**
   * The sum of the prices of all of the line items of the checkout in the currency's subunit, after any line item discounts.
   * have been applied.
   */
  line_items_subtotal_price: number;
  /**
   * The name of the checkout.
   */
  name: number;
  /**
   * Additional information entered by the customer with the [cart](/docs/api/liquid/objects/cart#cart-note).
   */
  note: string;
  /**
   * The order created by the checkout.
   */
  order: Order;
  /**
   * The ID of the order created by the checkout.
   */
  order_id: string;
  /**
   * The name of the order created by the checkout.
   */
  order_name: string;
  /**
   * An integer representation of the name of the order created by the checkout.
   */
  order_number: string;
  /**
   * Returns `true` if any of the line items of the checkout require shipping. Returns `false` if not.
   */
  requires_shipping: boolean;
  /**
   * The shipping address of the checkout.
   */
  shipping_address: Address;
  /**
   * The shipping method of the checkout.
   */
  shipping_method: ShippingMethod;
  /**
   * The shipping price of the checkout in the currency's subunit.
   */
  shipping_price: number;
  /**
   * The tax lines for the checkout.
   */
  tax_lines: TaxLine[];
  /**
   * The total tax amount of the checkout in the currency's subunit.
   */
  tax_price: number;
  /**
   * The total price of the checkout in the currency's subunit.
   */
  total_price: number;
  /**
   * The transactions of the checkout.
   */
  transactions: Transaction[];
  /**
   * The unavailable line items of the checkout.
   */
  unavailable_line_items: LineItem[];
  /**
   * The unfulfilled line items of the checkout.
   */
  unfulfilled_line_items: LineItem[];
  /**
   * The number of items in the checkout.
   */
  item_count: number;
}

/**
 * An article comment.
 */
export interface Comment {
  /**
   * The full name of the author of the comment.
   */
  author: string;
  /**
   * The content of the comment.
   */
  content: string;
  /**
   * A timestamp for when the comment was created.
   */
  created_at: string;
  /**
   * The email of he author of the comment.
   */
  email: string;
  /**
   * The ID of the comment.
   */
  id: number;
  /**
   * The status of the comment. Always returns `published`.
   */
  status: string;
  /**
   * A timestamp for when the status of the comment was last updated.
   */
  updated_at: string;
  /**
   * The relative URL of the article that the comment is associated with, with [`comment.id`](/docs/api/liquid/objects/comment#comment-id)
   * appended.
   */
  url: string;
}

/**
 * Returns checkout buttons for any active payment providers with offsite checkouts.
 */
export interface ContentForAdditionalCheckoutButtons {}

/**
 * Dynamically returns the content of [sections](/themes/architecture/sections) to be rendered on the home page.
 */
export interface ContentForIndex {}

/**
 * Dynamically returns content based on the current [template](/themes/architecture/templates).
 */
export interface ContentForLayout {}

/**
 * Creates an `&lt;option&gt;` tag for each country and region that's included in a shipping zone on the [Shipping](https://www.shopify.com/admin/settings/shipping) page of the Shopify admin.
 */
export interface CountryOptionTags {}

/**
 * The current page number.
 */
export interface CurrentPage {}

/**
 * The currently applied tags.
 */
export interface CurrentTags {}

/**
 * The error category strings for errors from a form created by a [`form` tag](/docs/api/liquid/tags/form).
 */
export interface FormErrors {
  /**
   * The translated error messages for each value in the `form_errors` array.
   */
  messages: String[];
  /**
   * The translated names for each value in the `form_errors` array.
   */
  translated_fields: String[];
}

/**
 * The [handle](/docs/api/liquid/basics#handles) of the resource associated with the current template.
 */
export interface Handle {}

/**
 * The meta description of the current page.
 */
export interface PageDescription {}

/**
 * An image to be shown in search engine listings and social media previews for the current page.
 */
export interface PageImage {}

/**
 * The page title of the current page.
 */
export interface PageTitle {}

/**
 * A part in the navigation for pagination.
 */
export interface Part {
  /**
   * Returns `true` if the part is a link. Returns `false` if not.
   */
  is_link: boolean;
  /**
   * The page number associated with the part.
   */
  title: string;
  /**
   * The URL of the part.
   */
  url: string;
}

/**
 * Header-value pairs that make up the list of payment information specific to the payment method.
 * This information can be be used by the customer to complete the transaction offline.
 */
export interface PendingPaymentInstructionInput {
  /**
   * The header of the payment instruction.
   * These are payment method-specific. Example: "Entity" and "Reference" for Multibanco
   */
  header: string;
  /**
   * Contains the corresponding values to the headers of the payment instruction.
   */
  value: string;
}

/**
 * Creates an HTML link element that links to a localied version of `shopify.com`, based on the locale of the store.
 */
export interface PoweredByLink {}

/**
 * Contains arrays of objects for each resource type that can be returned by a [predictive search query](/api/ajax/reference/predictive-search#get-locale-search-suggest).
 */
export interface PredictiveSearchResources {
  /**
   * The articles associated with the query.
   */
  articles: Article[];
  /**
   * The collections associated with the query.
   */
  collections: Collection[];
  /**
   * The pages associated with the query.
   */
  pages: Page[];
  /**
   * The products associated with the query.
   */
  products: Product[];
}

/**
 * A variant order quantity rule.
 */
export interface QuantityRule {
  /**
   * The minimum order quantity. The default value is `1`.
   */
  min: number;
  /**
   * The maximum order quantity.
   */
  max: number;
  /**
   * The number the order quantity can be incremented by. The default value is `1`.
   */
  increment: number;
}

/**
 * The active scripts, of each script type, on the store.
 */
export interface Scripts {
  /**
   * The active line item script.
   */
  cart_calculate_line_items: Script;
}

/**
 * The sitemap for a specific group in the [`robots.txt` file](/themes/architecture/templates/robots-txt-liquid).
 */
export interface Sitemap {
  /**
   * Returns `Sitemap`.
   */
  directive: string;
  /**
   * The URL that the sitemap is hosted at.
   */
  value: string;
}

/**
 * A sort option for a collection or search results page.
 */
export interface SortOption {
  /**
   * The customer-facing name of the sort option.
   */
  name: string;
  /**
   * The value of the sort option.
   */
  value: string;
}

/**
 * Information about the payment methods used for a transaction.
 */
export interface TransactionPaymentDetails {
  /**
   * The name of the company that issued the credit card used for the transaction.
   */
  credit_card_company: string;
  /**
   * The last four digits of the credit card number of the credit card used for the transaction.
   */
  credit_card_last_four_digits: string;
  /**
   * The credit card number of the credit card used for the transaction.
   */
  credit_card_number: string;
  /**
   * The gift card used for the transaction.
   */
  gift_card: GiftCard;
}

/**
 * The user-agent, which is the name of the crawler, for a specific group in the [`robots.txt` file](/themes/architecture/templates/robots-txt-liquid).
 */
export interface UserAgent {
  /**
   * Returns `User-agent`.
   */
  directive: string;
  /**
   * The name of the user-agent.
   */
  value: string;
}
