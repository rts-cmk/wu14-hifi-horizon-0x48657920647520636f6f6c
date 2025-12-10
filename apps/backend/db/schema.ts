import { relations } from "drizzle-orm";
import { index, int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema } from "drizzle-zod";

export const userTable = sqliteTable(
  "users",
  {
    id: int().primaryKey({ autoIncrement: true }),
    username: text().notNull().unique(),
    email: text().notNull(),
    password: text().notNull(),
  },
  (table) => [index("user_username_idx").on(table.username)],
);

export const cartTable = sqliteTable("carts", {
  id: int().primaryKey({ autoIncrement: true }),
  userId: int("user_id").references(() => userTable.id),
});

export const cartRelations = relations(cartTable, ({ one, many }) => ({
  owner: one(userTable, {
    fields: [cartTable.userId],
    references: [userTable.id],
  }),
  contents: many(cartItemsTable),
}));

export const cartItemsTable = sqliteTable("cart_items", {
  amount: int().default(1),
  cartId: int("cart_id").references(() => cartTable.id),
  productId: int("product_id").references(() => productTable.id),
});

export const cartItemRelations = relations(cartItemsTable, ({ one }) => ({
  cart: one(cartTable, {
    fields: [cartItemsTable.cartId],
    references: [cartTable.id],
  }),
  product: one(productTable, {
    fields: [cartItemsTable.productId],
    references: [productTable.id],
  }),
}));

export const productTable = sqliteTable(
  "products",
  {
    id: int().primaryKey({ autoIncrement: true }),
    name: text(),
    summery: text(),
    description: text(),
    price: int().notNull(),
    categoryId: int()
      .notNull()
      .references(() => productCategoryTable.id),
  },
  (table) => [index("product_name_idx").on(table.name)],
);

export const productCategoryTable = sqliteTable("product_categories", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
});

export const productCategoryRelations = relations(
  productCategoryTable,
  ({ many }) => ({
    products: many(productTable),
  }),
);

export const productVariantTable = sqliteTable("product_variants", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  imageURL: text(),
  productId: int().references(() => productTable.id),
});

export const productRelations = relations(productTable, ({ many, one }) => ({
  variants: many(productVariantTable),
  category: one(productCategoryTable, {
    fields: [productTable.categoryId],
    references: [productCategoryTable.id],
  }),
}));

export const productVariantRelation = relations(
  productVariantTable,
  ({ one }) => ({
    product: one(productTable, {
      fields: [productVariantTable.productId],
      references: [productTable.id],
    }),
  }),
);

export const userRegisterSchema = createInsertSchema(userTable);

type variant = typeof productVariantTable.$inferInsert;

type product = typeof productTable.$inferInsert;

export type fullProduct = (product & { variants: variant[] })[];
