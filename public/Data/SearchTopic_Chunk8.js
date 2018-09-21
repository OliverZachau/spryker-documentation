define({"595":{i:0.00569997285976306,u:"../content/capabilities/development/collector/collector-types.htm",a:" Data Collection\n\nData aggregation is a complex process of transforming scattered data between different resources, into a new one, usually smaller then the input. There are two basic Collector Types, depending on the way the data is being collected.\n\n AbstractPdoCollector - uses PHP Data Objects ...",t:"Collector Types "},"596":{i:0.00569997285976306,u:"../content/capabilities/development/collector/collector-sched-collector-jobs.htm",a:" The cronjob file jobs.php stores the configuration related to collectors.\n\n \u003c?php\n$jobs[] = [\n    \u0027name\u0027 =\u003e \u0027export-search\u0027,\n    \u0027command\u0027 =\u003e \u0027$PHP_BIN vendor/bin/console collector:search:export\u0027,\n    \u0027schedule\u0027 =\u003e \u0027*/10 * * * *\u0027,\n    \u0027enable\u0027 =\u003e false,\n    \u0027stores\u0027 =\u003e $allStores,\n];\n?\u003e In the ...",t:"Scheduling Collector Jobs "},"597":{i:0.000728898229624406,u:"../content/capabilities/product_management/product_relation/product-relation-building-your-own.htm",a:"To create a new relation type, modify the Yves and Zed applications:\n\n Zed:\n\n Create new relation type in \\Spryker\\Shared\\ProductRelation\\ProductRelationTypes as a new constant type for example TYPE_RELATION_NEW also include to getAvailableRelationTypes returned array. After this you can able select ...",t:"Building Your Own Product Relation Type   "},"598":{i:0.00280035857002684,u:"../content/capabilities/shipment/mg-shipment.htm",a:"Upgrading from Version 5.* to Version 6.* In version 6, multi-currency prices are introduced for shipment methods, allowing to set up different net and gross price per shipment method for each preconfigured currency. The spy_shipment_method.default_price database column becomes deprecated. Shipment ...",t:"Migration Guide - Shipment"},"599":{i:0.00291614428073257,u:"../content/capabilities/product_management/mg-product-option.htm",a:"Upgrading from Version 5.* to Version 6.* Update spryker/product-option to at least version 6.0.0. Install/Update spryker/currency to at least version 3.0.0. You can find additional information to currency module upgrade:  here . Install/Update spryker/price to at least version 5.0.0. Update ...",t:"Migration Guide - Product Option"},"600":{i:0.000772080209051173,u:"../content/capabilities/internationalization/glossary/glossary-keys.htm",a:" Glossary keys present two layers of persistence: SQL database storage in-memory key-value storage (Redis) In this section we’ll exemplify the usage of the functionality for managing the glossary keys from the backoffice user interface and the usage of them for the Yves interface through twig ...",t:"Managing Glossary Keys    "},"601":{i:0.00124861608111166,u:"../content/capabilities/order_management/url.htm",a:"The URL module handles dynamic URLs for entities that appear on the front-end (Yves). At the moment, Spryker core provides URL handling for products, CMS pages, categories and URL redirects. The URLs are stored in one database table and each is unique. The database structure for storing URLs looks ...",t:"URL "},"602":{i:0.0081979695411731,u:"../content/capabilities/checkout/checkout-process.htm",a:" Checkout Process In order to use checkout in Yves it should be correctly configured and dependencies should be provided. Each step can have a form, a controller action, the implementation of the step logic and Twig template to render the HTML. Forms - current step form collection. Controller action ...",t:"Checkout Process "},"603":{i:0.0035202270394448,u:"../content/capabilities/order_management/state_machine/state-machine-zed-presentation.htm",a:" To add manual trigger button or history for items, you need to add some implementation. State machine provides methods for triggering events and for retrieving history. StateMachineFacade::processedStateMachine(StateMachineItemTransfer[]) updates the given array of items with data from state ...",t:"Updating Presentation in Zed - State Machine    "},"604":{i:0.00112779009818134,u:"../content/capabilities/order_management/sales/mg-sales-aggregator.htm",a:" Upgrading from Version 4.* to Version 5.* SalesAggregator version 4 is last version to be released for this module. Apart from future bug fixes, it will no longer be developed and Core will no longer use it to get order totals anymore. There are two steps to the two migration process. The first is ...",t:"Migration Guide - SalesAggregator    "},"605":{i:0.00205439102357949,u:"../content/capabilities/promotions_and_discounts/discount-2-0.htm",a:" The latest version of this module can be found here  Discount     The Discount module is responsible of managing discounts in the Spryker OS. The schema below illustrates how discounts are modeled in Zed’s database. Discount Types There are two types of discounts: fixed amount discount ( e.g. 10€ ...",t:"Discount - Version 2.0    "},"606":{i:0.0035202270394448,u:"../content/capabilities/order_management/state_machine/state-machine-implementing-plugin.htm",a:" To start using state machine, you need create a new plugin by implementing the  StateMachineHandlerInterface. This plugin is used when there is need for additional information from client or some action happens and the client needs to be notified about it. List of interface methods that need to be ...",t:"Implementing the Plugin - State Machine    "},"607":{i:0.000630609983359454,u:"../content/industry_partners/hosting/root360.htm",a:"Hosting Provider - Root 360  Partner Information Copyright and Disclaimer See  Disclaimer .   Last review date: Jul. 6th, 2018 ",t:"Hosting Provider - Root 360 "},"608":{i:0.000946268663508819,u:"../content/capabilities/product_management/mg-product-label.htm",a:"Upgrading from Version 1.* to Version 2.* The following list describes the Backward Compatibility breaking changes in this version and how to upgrade. Product Label Rendering \n            We\u0027ve changed spyProductLabels twig function to work based on a list of product label IDs.\n            It\u0027s ...",t:"Migration Guide - Product Label"},"609":{i:0.000907294197197944,u:"../content/capabilities/product_management/mg-product-set-gui.htm",a:"Upgrading from Version 1.* to Version 2.* \n            From version 2 we have support multi-currency. First of all make sure you  have migrated the Price module . We have changed collector dependency to use PriceProduct module instead of price, please update your code accordingly if you overwrote ...",t:"Migration Guide - Product Set GUI"},"610":{i:0.00124126065999839,u:"../content/capabilities/product_management/product-store_relation/product-store-relation-under-the-hood.htm",a:" Database Schema \n            The Product module introduces a new table: spy_product_abstract_store. The table stores all abstract product-store relations. An abstract product is available in a store when it has a\n            spy_product_abstract_store row for the given abstract product and store ...",t:"Under the Hood - Multi-Store Products  "},"611":{i:0.00166984550766197,u:"../content/capabilities/cart/calculation/calculation.htm",a:" Spryker Commerce OS uses the Calculation module to calculate the cart totals that are displayed in the cart/checkout or when the order is placed.\nIt\u0027s also used to recalculate the order totals after refund.\n The calculation module extensively uses plugins to inject calculation algorithms.\n How ...",t:"Calculation    "},"612":{i:0.00113448686821764,u:"../content/front-end_developer_guide/demoshop/twig_templates/twig-best-practices.htm",a:" Include vs Macros vs Embed\n With includes, you can include an entire template. The template has access to any template variables that are currently in scope.\n\n With macros, you are defining a kind of function within Twig that can render a particular component given appropriate objects.\n\n So you ...",t:"Best Practices - Twig Templates "},"613":{i:0.00372182798750622,u:"../content/capabilities/cms/cms_widget/available-widgets.html",a:" Currently there are four widgets provided by default in Spryker shop: Product (abstract), Product Set, Product Group and Product Search. They can be found in Administration Interface under Content Management-\u003ePage-\u003e Edit Placeholders-\u003e Content tab. The rules for widget creation are provided in Cms ...",t:"Available Widgets  "},"614":{i:0.000728898229624406,u:"../content/capabilities/product_management/product_relation/product-relation-types.htm",a:" In Spryker currently there are two types of relations:\n\n Related-products, related products displayed in the product detail page for the currently selected abstract product.\n Up-selling, related products displayed in the cart overview page, related products are from a list of abstract product ids ...",t:"Product Relation Types    "},"615":{i:0.000728898229624406,u:"../content/capabilities/product_management/product_relation/product-relation-yves-datatastore.htm",a:" The product relation collector exports relations to the Yves data store.  This collector is located in the ProductRelationCollector module.\n \nInclude this module in your composer.json file and update. Then add the plugin ProductRelationCollectorPlugin from this module to ...",t:"Yves Datastore Collector - Product Relation    "},"616":{i:0.000720650069256582,u:"../content/capabilities/price/price-types.htm",a:" Price Per Business Unit Offer your customers individual agreements and customize the Prices per Business Unit accordingly. The Spryker Commerce OS allows you to display different prices in your web shop. To avoid unnecessary repetition of values, the data is compressed in the database. You can also ...",t:"Price Types  "},"617":{i:0.000987990106185012,u:"../content/capabilities/gift_cards/enabling-gift-cards.htm",a:" The Gift Cards feature is shipped with the following modules: GiftCard: implements basic functionality of the Gift Cards feature as  well as the  Replacement value-checking strategy . GiftCardBalance: implements gift card  Balance value-checking strategy . GiftCardMailConnector: responsible for ...",t:"Enabling Gift Cards"},"618":{i:0.000720650069256582,u:"../content/capabilities/price/prices_per_merchant_relations/price-per-merchant-relation.htm",a:"In B2B commerce transactions, prices are typically negotiated in contracts, therefore merchants and their clients, which are usually company business units, expect to see their own prices in the shop. With the Prices per Merchant Relation feature, the shop owners of B2B/B2C marketplace can provide ...",t:"Prices per Merchant Relation"},"619":{i:0.00547670774967631,u:"../content/capabilities/cart/mg-cart.htm",a:" Upgrading from Version 4.* to Version 5.* With the implementation of the quote storage strategies, the new version of the Cart module allows to use different behaviors for different strategies. Since QuoteClient::getStorageStrategy method is used now, the Quote module\u0027s version must be 2.0.0 or ...",t:"Migration Guide - Cart "},"620":{i:0.00106966277449966,u:"../content/capabilities/search_and_filter/dynamic-filters-functionality.htm",a:" In Zed there’s a section (Search and Filters -\u003e Filter Preferences) for managing the product attributes that you’d like to filter by in the shop. There are several filter types that the framework supports at the moment: single-select: filter for one value at a time (e.g. radio group), multi-select: ...",t:"Dynamic Filters Functionality"},"621":{i:0.0035202270394448,u:"../content/capabilities/order_management/state_machine/state-machine-cronjob.htm",a:" There are three console commands dedicated for the state machine: state-machine:check-condition - checks all the states that have a condition without event and triggers them. state-machine:check-timeout - check timeout expired items and triggers event for them. state-machine:clear-locks - clears ...",t:"Cron Jobs - State Machine    "},"622":{i:0.00429296608278361,u:"../content/capabilities/cms/cms_block/mg-cms-block-category-connector.htm",a:"Migration Guide - CMS Block Categor Connector  Upgrading from Version 1.* to Version 2.* Due to introducing the CMS Block positioning and CMS Block templates for Category, the CMS Block Category Connector module now requires Category \u003e=4.0. The migration will contain the following steps: New module ...",t:"Migration Guide - CMS Block Category Connector"},"623":{i:0.00423743818914539,u:"../content/capabilities/cart/calculation/mg-calculation.htm",a:" Upgrading from Version 3.* to Version 4.* To upgrade from 3* to 4*, composer update your calculator to version 4. Updating Calculator Stacks In the new version there are two new calculator stacks, getQuoteCalculatorPluginStack and getOrderCalculatorPluginStack. They are both defined in ...",t:"Migration Guide - Calculation    "},"624":{i:0.00296124058316535,u:"../content/capabilities/cms/cms_widget/cms-widget.htm",a:" With CMS content widgets we are bringing more power to CMS pages and blocks. You can easily include placeholders to display products, product groups and products sets in CMS pages and blocks. Multiple templates allow you to define which template is used per widget. So, you can for example apply ...",t:"CMS Widget   "},"625":{i:0.00504649448677979,u:"../content/capabilities/inventory_management/about-inventory.htm",a:" Inventory is the amount of products you offer to your customers. These products are catalogued and divided into items that are in stock and reserved. The stock value is the physical amount of products you have in your warehouse, whereas availability is an aggregated value per store which reflects ...",t:"Inventory    "},"626":{i:0.000907294197197944,u:"../content/capabilities/promotions_and_discounts/mg-discount.htm",a:" Upgrading from Version 5.* to Version 6.* Update/install spryker/discount to at least 6.0.0 version. Run vendor/bin/console transfer:generate to generate the new transfer objects. Install the new database tables by running vendor/bin/console propel:diff. Propel should generate a migration file with ...",t:"Migration Guide - Discount   "},"627":{i:0.00873830611472218,u:"../content/capabilities/development/collector/collector-development.htm",a:" The Collector module provides mechanisms to manage data consumed by front-end application.\n\nTo populate the data stores, 4 steps are required:\n\n Touch\n \nConfigure\n Collect\n Touch\n In order for anything to be synchronized, first it has to be marked (touched) via the Touch mechanism. Each collector ...",t:"Development - Collector "},"628":{i:0.00113448686821764,u:"../content/capabilities/product_management/product_group/product-group-under-the-hood.htm",a:" Database Schema The ProductGroup module provides spy_product_group table that stores product groups. Product group entities have only the id_product_group field, because we don’t need to display or refer to any groups in any way. The only necessary details for a group are the abstract products that ...",t:"Product Group - Under The Hood    "},"629":{i:0.00161349090762613,u:"../content/capabilities/search_and_filter/search-3-0.htm",a:" The latest version of this module can be found in  Search      section One of the most important features in an e-commerce application is to give the customer the ability to find the products that he needs. Depending on how easy it is to find the products the customer is searching for and how ...",t:"Search 3.0"},"630":{i:0.00080600710379778,u:"../content/capabilities/product_management/product_options/product-options-1.htm",a:"   \n            Product options allow to configure a product further. You can define option types and each option type can have 1 to n option values.\n            Each option value has an associated price.\n             Example \n                    You want to sell a piece of artwork as a product ...",t:"Product Options - Version 1    "},"631":{i:0.00422986145517435,u:"../content/capabilities/search_and_filter/search_query.htm",a:" Once we have all necessary data in Elasticsearch, it’s time to display them in Yves. In order to achieve this, we first need to query Elasticsearch, which will return raw data for us that we need to  Process Query Result  to display it in our templates. In the SearchClient you can find the search() ...",t:"Search Query  "},"632":{i:0.00324303296087901,u:"../content/capabilities/product_management/mg-product.htm",a:"Upgrading from Version 5.* to Version 6.* This version defines connection between abstract products and stores, allowing users to manage abstract product appearance per store. Update/install spryker/collector to at least 6.0.0 version. You can find additional help for feature migration  here . ...",t:"Migration Guide - Product"},"633":{i:0.00144108265342242,u:"../content/capabilities/promotions_and_discounts/discount-excl-nonexcl.htm",a:"Exclusive and Non-Exclusive Discounts  Discounts that have the Is_Exclusive flag set with value true cannot be combined. If the cart includes more than one exclusive discount, only the discount that offers the highest discounted value will be applied. If the cart includes a mix of exclusive and ...",t:"Exclusive and Non-exclusive Discounts"},"634":{i:0.000728898229624406,u:"../content/capabilities/product_management/product_relation/product-relation-db-entity-relation.htm",a:" spy_product_relation.fk_product_abstract - is the product for which relation is build.  spy_product_relation.is_active - if relation is not active it will still be exported, but not visible.  spy_product_relation_product_abstract.fk_product_abstract - is the related product.  ...",t:"Database Entity Relation Schema - Product    "},"635":{i:0.00401110218611133,u:"../content/capabilities/development/mg-touch.htm",a:" Upgrading from Version 3.* to Version 4.* Update/install spryker/touch to at least 4.0.0 version. Install the new database columns by running vendor/bin/console propel:diff. Propel should generate a migration file with the changes. Run vendor/bin/console propel:migrate to apply the database ...",t:"Migration Guide - Touch    "},"636":{i:0.000881772795594939,u:"../content/capabilities/master_suite_and_custom_suite/choosing-a-suite.htm",a:" The Sample Suite represents a standard shop, with common functionality and work-flows to show basic features. \nYou can use the Sample Suite as a boilerplate for your own shop and customize it for your products, CI and services.\nCustom Suites are individual versions of the OS that are tailored ...",t:"Choosing the Right Suite for You   "},"637":{i:0.00130396024559458,u:"../content/capabilities/cms/cms_block/cms-block-product-connector.htm",a:" Product Blocks Product blocks are blocks that can be embedded in the product template, for which we can specify on which specific product we want them to be rendered.\n\t\t Installation Install the CMS Block Product Connector module with composer: \n\t\t\t\"spryker/cms-block-product-connector\": \"^1.0.0\" ...",t:"CMS Block Product Connector"},"638":{i:0.0131673263255985,u:"../content/capabilities/tax/tax-1-0.htm",a:" The Tax module is responsible for handling tax rates that can apply for products, product options or shipment. Overview The tax sets can have different tax rates for each country defined in your shop. You can see in the diagram below how these entities are modeled in the database. A tax set is ...",t:"Tax Version 1.0  "},"639":{i:0.000817420025087182,u:"../content/capabilities/development/code-generator.htm",a:" The CodeGenerator module can generate your project code.  Out of the box it provides generators for Yves, Zed, Client, Service and Shared application layers.\n\n This is a pre-release.\n Installation\n Install it as\n\n composer require --dev spryker/code-generator You need to run vendor/bin/console ...",t:"Code Generator    "},"640":{i:0.0081979695411731,u:"../content/capabilities/checkout/checkout-steps.htm",a:" Entry Step Redirect customer to correct step based on QuoteTransfer state. This step requires input = false so it won’t be rendered. Customer Step The customer step provides three forms (login, register and register as a guest). This step is responsible for filling CustomerTransfer with ...",t:"Checkout Steps   "},"641":{i:0.00243548651274066,u:"../content/capabilities/product_management/mg-product-management.htm",a:"Upgrading from Version 0.9.* to Version 0.10.* The new version provides support to manage \"abstract product-store\" relations per store. Update / install spryker/product to at least 6.0.0 version. You can find additional help for feature migration  here . Update / install spryker/productmanagement to ...",t:"Migration Guide - ProductManagement"},"642":{i:0.00936867350433116,u:"../content/capabilities/order_management/sales/sales-5-0.htm",a:" The latest version of this module can be found here  Sales     Getting Totals for Order Spryker does not store order grand total or subtotal amounts; all amounts are stored before calculation, order items store single item gross amounts, discounts store single item discount amount. To get the ...",t:"Sales 5.0    "},"643":{i:0.0035202270394448,u:"../content/capabilities/order_management/state_machine/state-machine-events.htm",a:" There are two main triggers: first one StateMachineFacade::triggerForNewStateMachineItem() is used when first time triggering the state machine for an item; this trigger will initialize the state machine and start transition through states until a decision without event, timeout or manual event is ...",t:"Triggering Events - State Machine    "},"644":{i:0.000907294197197944,u:"../content/capabilities/search_and_filter/mg_search.htm",a:"Upgrading from Version 7.* to Version 8.* \n                    With this version of the Search module we have migrated to Elasticsearch 5.6. Please read the\n                     Elasticsearch\n                    Breaking Changes in 5.0  official documentation to adjust your custom implementation ...",t:"Migration Guide - Search"},"645":{i:0.00268483572304749,u:"../content/capabilities/search_and_filter/search.htm",a:" One of the most important features in an e-commerce application is to give the customer the ability to find the products that he needs. Depending on how easy it is to find the products the customer is searching for and how relevant the search results are, the search feature is a crucial aspect for ...",t:"Search    "},"646":{i:0.000907294197197944,u:"../content/capabilities/price/mg-price-cart-connector.htm",a:"Upgrading from Version 3.* to Version 4.* \n            In version 4 we have added support for multi-currency. First of all make sure you  have migrated the Price module . \n\n            We have changed the way the default price type is assigned, it\u0027s not coming from the new price module, also the ...",t:"Migration Guide - Price Cart Connector"},"647":{i:0.00772682684150137,u:"../content/capabilities/cms/cms_block/mg-cms-block.htm",a:"Migration Guide - CMS Block  Upgrading from Version 1.* to Version 2.* This version allows to save CMS Block-Store relation. Update spryker/cms-block module to at least Version 2.0.0. \n                Update your spryker/cms-block-collector module to at least Version 2.0.0.\n                You can ...",t:"Migration Guide - CMS Collector"},"648":{i:0.00175748068652965,u:"../content/capabilities/cms/mg-cms-collector.htm",a:" Upgrading from Version 1.* to Version 2.* Upgrade spryker/cms module to at least 6.2 version. Check out the  CMS migration guide  for additional help. Upgrade spryker/cms-content-widget module to at least 1.1 version if you use CmsPageCollectorParameterMapExpanderPlugin plugin. CMS page data ...",t:"Migration Guide - CMS Collector"},"649":{i:0.000656672580852119,u:"../content/administration_interface_guide/products/products.htm",a:"products Delete this text and replace it with your own content.",t:"products"},"650":{i:0.000998837543937477,u:"../content/capabilities/search_and_filter/search-configure-features.htm",a:"In this section you’ll learn how to configure faceted navigation, filters, pagination and sorting, so all the important search features that are provided by the Search (Undefined variable: General.bundle/module). This configuration is only relevant if you enable the three query expanders and result ...",t:"Configure Search Features"},"651":{i:0.00326339266045922,u:"../content/capabilities/cms/cms_block/mg-cms-block-category-connector-console.htm",a:" Click here to expand CMS Block Category Connector Migration script \n\u003c?php\n\n/**\n * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.\n * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.\n */\n\nnamespace ...",t:"Migration Guide - CMS Block Category Connector Migration Console   "},"652":{i:0.00569997285976306,u:"../content/capabilities/development/collector/collector-running.htm",a:" Each Collector is executed once for each Locale that’s configured in the Store. To see the currently configured locales, check the stores.php configuration file.\n\nThere are three commands which handle collectors related tasks.\n\n console collector:search:export\nconsole ...",t:"Running Collectors "},"653":{i:0.000817420025087182,u:"../content/capabilities/development/architecture-sniffer.htm",a:" We use our  Architecture Sniffer Tool  to assert a certain quality of Spryker architecture for both core and project.\n Running the Tool The sniffer can find a lot of violations and will report them: $ vendor/bin/console code:sniff:architecture\n\n// Sniff a specific subfolder of your project - with ...",t:"Architecture Sniffer Tool"},"654":{i:0.00136073150300194,u:"../content/capabilities/shipment/shipment-overview.htm",a:" The main concepts regarding shipping that are modeled in the database are : shipment carrier shipment method The shipment method is linked to the sales order. The schema below shows how these entities are modeled in the database : A sales order has associated a shipment method. Each shipment method ...",t:"Shipment Overview  "},"655":{i:0.00621004701044132,u:"../content/capabilities/tax/tax-2-0.htm",a:" The latest version of this module can be found here  Tax Version 1.0   Spryker allows to define different tax sets that include one to many different tax rates. Tax Set - Tax Rate Association A tax set has associated at least one tax rate. For products on which there aren’t applied any taxes : ...",t:"Tax Version 2.0   "},"656":{i:0.00533683137609025,u:"../content/capabilities/price/mg-price.htm",a:"Upgrading from Version 4.* to Version 5.* \n            From version 5 we have changed price module responsibilities: previously it was responsible for handling product price related functionality.\n            This responsibility has now been moved to the new PriceProduct module which handles product ...",t:"Migration Guide - Price"},"657":{i:0.00560358419583846,u:"../content/capabilities/order_management/mg-oms.htm",a:" Upgrading from Version 7.* to Version 8.* \n            With the new OMS version, detail lock logging has been introduced and execution bucket size decreased.\n In order to successfully migrate to the new OMS version, perform the following steps:  Migrate the DB:\n                 vendor/bin/console ...",t:"Migration Guide - OMS    "},"658":{i:0.00249909284690332,u:"../content/capabilities/price/money.htm",a:" Money Handling monetary values can be a problem and is often quite hard. The Money bundle makes it easier to work with monetary values. Spryker handles all monetary values as integer and provides conversions from decimal values to cent values and vice versa. The key feature of this module is to ...",t:"Money  "},"659":{i:0.000907294197197944,u:"../content/capabilities/product_management/mg-product-relation-collector.htm",a:"Upgrading from Version 1.* to Version 2.* \n            From version 2 we added support for multi-currency. \n          First of all make sure you  migrated the Price module . We have changed collector dependency to use PriceProduct module instead of price, please update your code accordingly if you ...",t:"Migration Guide - Product Relation Collector"},"660":{i:0.00166200619985777,u:"../content/capabilities/order_management/state_machine/state-machine-patterns.htm",a:" Process Patterns The State Machine Cook Book describes how to build a state machine with the elements state, transition and event. However there are some recurring design problems that are needed in many processes. In this article common problems and their solution with state machine snippets are ...",t:"State Machine Patterns    "},"661":{i:0.00139770944536541,u:"../content/capabilities/inventory_management/stock.htm",a:" Stock defines physical amount of products you have in your whorehouse. This article will tell you how the stock module works and how product stock is calculated. Multiple Storage Locations Spryker allows to define several storage locations in which the products are being stored. For a product we ...",t:"Stock    "},"662":{i:0.000728898229624406,u:"../content/capabilities/product_management/product_relation/product-relation-query-builder.htm",a:" Query build in Zed allows to select and bulid a dynamic related product query. The query ships with pre-set rules:\n\n sku - filter by abstract product sku.\n name - filter by abstract product name. The locale is Zed’s default locale. If a product matches in that locale it will be related in both ...",t:"Query Builder - Product Relation    "},});