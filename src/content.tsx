import { ReactNode } from 'react';
import { Target, Users, Megaphone, Map, Layout, Zap, ShoppingCart, Search, Image, Code, LineChart, Mail, Shield, TrendingUp, MonitorSmartphone, Lightbulb } from 'lucide-react';

export interface Section {
  id: string;
  title: string;
  icon: ReactNode;
  content: ReactNode;
}

export const planSections: Section[] = [
  {
    id: 'goals',
    title: 'Business Goals & KPIs',
    icon: <Target className="w-5 h-5" />,
    content: (
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-[#D91A21] uppercase">Goals</h3>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li><strong className="text-slate-900 font-bold">Primary Goals:</strong> Maximize online direct delivery orders, drive app downloads, and facilitate seamless click-and-collect (in-store pickup).</li>
          <li><strong className="text-slate-900 font-bold">Secondary Goals:</strong> Expand catering inquiries, promote party bookings, drive loyalty program sign-ups.</li>
        </ul>
        <h3 className="text-xl font-bold text-[#D91A21] mt-6 uppercase">Key Performance Indicators</h3>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li><strong className="text-slate-900 font-bold">Conversion Rate:</strong> Target &gt; 4.5% for returning users, &gt; 2% for new users.</li>
          <li><strong className="text-slate-900 font-bold">Average Order Value (AOV):</strong> Increase through strategic cross-selling and bundling.</li>
          <li><strong className="text-slate-900 font-bold">Cart Abandonment Rate:</strong> Target &lt; 60% through streamlined checkout.</li>
          <li><strong className="text-slate-900 font-bold">Customer Lifetime Value (CLV):</strong> Boost via loyalty integration.</li>
          <li><strong className="text-slate-900 font-bold">Bounce Rate:</strong> Target &lt; 40% using engaging hero sections and fast load times.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'audience',
    title: 'Target Audience Analysis',
    icon: <Users className="w-5 h-5" />,
    content: (
      <div className="space-y-4">
         <h3 className="text-xl font-bold text-[#D91A21] uppercase">Core Demographics</h3>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li><strong className="text-slate-900 font-bold">Families:</strong> Parents ordering for themselves and their kids; focus on value buckets.</li>
          <li><strong className="text-slate-900 font-bold">Students & Young Professionals:</strong> Seeking budget-friendly, convenient, and fast meals.</li>
          <li><strong className="text-slate-900 font-bold">OFWs (Overseas Filipino Workers):</strong> Ordering for families back home via the Jollibee Padala service.</li>
        </ul>
        <h3 className="text-xl font-bold text-[#D91A21] mt-6 uppercase">Behaviors & Motivations</h3>
        <p className="text-slate-600">Craving comfort food, seeking convenience after a long day, and ordering for group gatherings, parties, or celebrations.</p>
        <h3 className="text-xl font-bold text-[#D91A21] mt-6 uppercase">Pain Points</h3>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>Complex or overwhelming menu navigation.</li>
          <li>Slow loading times on mobile networks (3G/4G).</li>
          <li>Hidden delivery fees revealed only at checkout.</li>
          <li>Forced account creation before being allowed to see the menu.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'brand',
    title: 'Brand Positioning',
    icon: <Megaphone className="w-5 h-5" />,
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#FFC72C]/10 border border-[#FFC72C]/30 p-5 rounded-2xl">
            <h3 className="font-black text-[#D91A21] uppercase text-sm mb-2">Tone & Voice</h3>
            <p className="text-sm text-slate-600">Joyful, family-oriented, energetic, proud of its Filipino heritage, warm, and comforting. The copy should always feel like a friendly invitation.</p>
          </div>
          <div className="bg-[#FFC72C]/10 border border-[#FFC72C]/30 p-5 rounded-2xl">
            <h3 className="font-black text-[#D91A21] uppercase text-sm mb-2">Emotional Triggers</h3>
            <p className="text-sm text-slate-600">Nostalgia (&quot;Bida ang Saya&quot;), togetherness, family bonding, and the feeling of reward after a long day of work.</p>
          </div>
        </div>
        <h3 className="text-xl font-bold text-[#D91A21] mt-6 uppercase">Visual Identity</h3>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li><strong className="text-slate-900 font-bold">Primary Colors:</strong> Jollibee Red (#D91A21), Cheerful Yellow (#FFC72C), Crisp White (#FFFFFF).</li>
          <li><strong className="text-slate-900 font-bold">Typography:</strong> Friendly, highly legible sans-serif for body text (e.g., Inter, Nunito), paired with bold, slightly rounded fonts for headings to evoke warmth.</li>
          <li><strong className="text-slate-900 font-bold">Imagery:</strong> High-saturation, warm lighting, smiling faces, and appetizing, close-up food shots (steaming pasta, crispy chicken skin).</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'sitemap',
    title: 'Website Structure (Sitemap)',
    icon: <Map className="w-5 h-5" />,
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border border-slate-100 p-5 rounded-2xl bg-white shadow-sm overflow-hidden">
            <h4 className="font-black text-slate-800 uppercase text-xs tracking-wider mb-2">Homepage</h4>
            <p className="text-sm text-slate-500">Hero Promo, Quick Order CTA, Bestsellers Carousel, App Download Link.</p>
          </div>
          <div className="border border-slate-100 p-5 rounded-2xl bg-white shadow-sm overflow-hidden">
            <h4 className="font-black text-slate-800 uppercase text-xs tracking-wider mb-2">Menu Categories</h4>
            <p className="text-sm text-slate-500">Chickenjoy, Burgers, Jolly Spaghetti, Breakfast, Desserts, Combo Deals.</p>
          </div>
          <div className="border border-slate-100 p-5 rounded-2xl bg-white shadow-sm overflow-hidden">
            <h4 className="font-black text-slate-800 uppercase text-xs tracking-wider mb-2">Product Detail (PDP)</h4>
            <p className="text-sm text-slate-500">Customization (Spicy/Regular), Add-ons (Drinks, Extras), Nutritional Info.</p>
          </div>
          <div className="border border-slate-100 p-5 rounded-2xl bg-white shadow-sm overflow-hidden">
            <h4 className="font-black text-slate-800 uppercase text-xs tracking-wider mb-2">Online Ordering</h4>
            <p className="text-sm text-slate-500">Cart &rarr; Guest Checkout / Login &rarr; Delivery / Pickup details &rarr; Payment.</p>
          </div>
          <div className="border border-slate-100 p-5 rounded-2xl bg-white shadow-sm overflow-hidden">
            <h4 className="font-black text-slate-800 uppercase text-xs tracking-wider mb-2">Store Locator</h4>
            <p className="text-sm text-slate-500">Interactive map view, filter by Drive-Thru, 24 Hours, or Delivery zones.</p>
          </div>
           <div className="border border-slate-100 p-5 rounded-2xl bg-white shadow-sm overflow-hidden">
            <h4 className="font-black text-slate-800 uppercase text-xs tracking-wider mb-2">Promotions</h4>
            <p className="text-sm text-slate-500">Current digital coupons, meal bundles, and Limited Time Offers (LTOs).</p>
          </div>
           <div className="border border-slate-100 p-5 rounded-2xl bg-white shadow-sm overflow-hidden">
            <h4 className="font-black text-slate-800 uppercase text-xs tracking-wider mb-2">Corporate & Support</h4>
            <p className="text-sm text-slate-500">About Us, Franchising, Careers, Contact/Support, Order Tracking.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'homepage',
    title: 'High-Converting Homepage',
    icon: <Layout className="w-5 h-5" />,
    content: (
      <div className="space-y-4">
        <ul className="space-y-6">
          <li className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D91A21] flex items-center justify-center text-white font-black text-sm shadow-md">1</div>
            <div>
              <h4 className="font-bold text-lg text-slate-800">Dynamic Hero Section</h4>
              <p className="text-slate-600 mt-1">Sticky top navigation with a prominent &quot;Order Now&quot; button. High-res video loop of crispy Chickenjoy or family eating. Large emotional headline (e.g., &quot;Bring the Joy Home&quot;), primary CTA (&quot;Order Delivery&quot;), secondary CTA (&quot;Find a Store&quot;).</p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D91A21] flex items-center justify-center text-white font-black text-sm shadow-md">2</div>
            <div>
              <h4 className="font-bold text-lg text-slate-800">Bestsellers (Horizontal Scroll)</h4>
              <p className="text-slate-600 mt-1">Frictionless ordering right from the homepage. Quick-add buttons on beautiful product cards for Chickenjoy buckets, Jolly Spaghetti pans, and Yumburgers.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D91A21] flex items-center justify-center text-white font-black text-sm shadow-md">3</div>
            <div>
              <h4 className="font-bold text-lg text-slate-800">Social Proof & Community</h4>
              <p className="text-slate-600 mt-1">Include a banner stating &quot;Over 1 Million Buckets Delivered&quot; or embed a feed of real customer joy moments from TikTok and Instagram.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D91A21] flex items-center justify-center text-white font-black text-sm shadow-md">4</div>
            <div>
              <h4 className="font-bold text-lg text-slate-800">App & Padala Prompts</h4>
              <p className="text-slate-600 mt-1">A dedicated row: &quot;Sending Joy to the Philippines? Use Jollibee Padala.&quot; alongside a QR code and native app store badges for local app downloads.</p>
            </div>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'ux',
    title: 'UX/UI & CRO Strategy',
    icon: <Zap className="w-5 h-5" />,
    content: (
      <div className="space-y-4">
        <ul className="list-disc pl-5 space-y-3 text-slate-600">
          <li><strong className="text-slate-900 font-bold">Mobile-First Approach:</strong> Thumb-friendly touch targets (minimum 48px height), bottom sticky navigation for Cart & Order Now on mobile browsers.</li>
          <li><strong className="text-slate-900 font-bold">Performance Focus:</strong> Image optimization (WebP/AVIF), lazy loading below the fold, and skeleton loaders to reduce Perceived Wait Time.</li>
          <li><strong className="text-slate-900 font-bold">Clear CTAs:</strong> High-contrast buttons (Yellow on Red) exclusively reserved for primary actions. Incorporate a sticky cart summary at the bottom of the screen when items are added.</li>
          <li><strong className="text-slate-900 font-bold">Strategic Urgency:</strong> Informational banners like &quot;Order in the next 15 mins for delivery by 12:30 PM&quot; or &quot;Limited stock on special toys&quot;.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'ordering',
    title: 'Online Ordering System',
    icon: <ShoppingCart className="w-5 h-5" />,
    content: (
      <div className="space-y-4">
        <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl">
          <h4 className="font-black text-slate-900 mb-2 uppercase text-sm tracking-wider">Step-by-step User Flow</h4>
          <ol className="list-decimal pl-5 space-y-1 text-sm text-slate-600">
            <li>Location Check (Ensures delivery is possible *before* building cart)</li>
            <li>Browse Menu & Add Items</li>
            <li>Popup / Slide-out Cart with Cross-sell prompts</li>
            <li>Review Cart (Shows progress to Free Delivery)</li>
            <li>Checkout (Guest checkout by default; login optional)</li>
            <li>Payment Selection</li>
            <li>Success Page & Live Tracker</li>
          </ol>
        </div>
        <h3 className="text-xl font-bold text-[#D91A21] mt-6 uppercase">Upselling & Cross-selling</h3>
        <p className="text-slate-600">Implement one-click &quot;Make it a meal?&quot; prompts to easily add a drink and fries. In the slide-out cart, offer low-friction add-ons: &quot;Add a Peach Mango Pie for just ₱45?&quot;</p>
        <h3 className="text-xl font-bold text-[#D91A21] mt-6 uppercase">Checkout Philosophy</h3>
        <p className="text-slate-600">Always default to Guest Checkout to reduce friction. Provide the option to &quot;Save Details for Next Time&quot; or &quot;Create Account&quot; at the *end* of the transaction. Avoid multi-page checkouts; utilize a seamless single-page React form or accordion style.</p>
      </div>
    ),
  },
  {
    id: 'seo',
    title: 'SEO Strategy',
    icon: <Search className="w-5 h-5" />,
    content: (
      <div className="space-y-4">
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li><strong className="text-slate-900 font-bold">Keyword Targeting:</strong> &quot;fried chicken delivery [city]&quot;, &quot;fast food near me&quot;, &quot;Jollibee delivery hotline&quot;, &quot;order Jollibee online&quot;.</li>
          <li><strong className="text-slate-900 font-bold">On-Page SEO:</strong> Descriptive alt-text for food images. Strict semantic HTML. Implement Schema.org markup for Restaurants, LocalBusiness, and Menu Items to capture rich snippets in Google Search.</li>
          <li><strong className="text-slate-900 font-bold">Local SEO / Programmatic Pages:</strong> Create individual programmatic landing pages for every branch (e.g., <code>jollibeedelivery.com/stores/makati/bgc-triangle</code>) featuring embedded Google Maps, store hours, drive-thru availability, and store-specific promos.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'content',
    title: 'Content Strategy',
    icon: <Image className="w-5 h-5" />,
    content: (
      <div className="space-y-4">
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li><strong className="text-slate-900 font-bold">Food Imagery:</strong> High-definition, slow-motion video snippets of gravy pouring or chicken crunching in hero banners. Food must look appetizing, hot, and strictly on-brand.</li>
          <li><strong className="text-slate-900 font-bold">Copywriting:</strong> Action-oriented, sensory-rich (&quot;Crispylicious, Juicylicious&quot;), short, and punchy. Avoid corporate jargon.</li>
          <li><strong className="text-slate-900 font-bold">Promotional Campaigns:</strong> Lean into seasonal events heavily (e.g., Christmas bucket designs, Valentine&apos;s Day Perfect Pairs) with dedicated landing pages to capture seasonal search intent.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'tech',
    title: 'Technical Stack',
    icon: <Code className="w-5 h-5" />,
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-slate-100 p-5 rounded-2xl bg-slate-50">
            <h4 className="font-black text-slate-900 mb-1 uppercase tracking-wider text-xs">Frontend</h4>
            <p className="text-sm text-slate-500">React / Next.js for SSR/SSG (improves SEO and initial load). Tailwind CSS for rapid UI styling. Framer Motion for micro-interactions.</p>
          </div>
          <div className="border border-slate-100 p-5 rounded-2xl bg-slate-50">
            <h4 className="font-black text-slate-900 mb-1 uppercase tracking-wider text-xs">Backend & DB</h4>
            <p className="text-sm text-slate-500">Node.js microservices. Firebase/Firestore for real-time order tracking. Redis for fast cart session caching.</p>
          </div>
          <div className="border border-slate-100 p-5 rounded-2xl bg-slate-50">
            <h4 className="font-black text-slate-900 mb-1 uppercase tracking-wider text-xs">Payments</h4>
            <p className="text-sm text-slate-500">Stripe or local aggregators (PayMongo in PH for GCash, Maya, cards, GrabPay). Robust Cash on Delivery (COD) logic flow.</p>
          </div>
          <div className="border border-slate-100 p-5 rounded-2xl bg-slate-50">
            <h4 className="font-black text-slate-900 mb-1 uppercase tracking-wider text-xs">Hosting</h4>
            <p className="text-sm text-slate-500">Vercel for frontend delivery. Google Cloud Run for backend scaling automatically during peak lunch/dinner rush hours.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'analytics',
    title: 'Analytics & Tracking',
    icon: <LineChart className="w-5 h-5" />,
    content: (
      <div className="space-y-4">
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li><strong className="text-slate-900 font-bold">Google Analytics 4 (GA4):</strong> Strict setup of Enhanced Ecommerce tracking (view_item, add_to_cart, begin_checkout, purchase).</li>
          <li><strong className="text-slate-900 font-bold">Behavioral Tracking:</strong> Implement Hotjar or Clarity to track how far users scroll on the menu, capture heatmaps, and identify where they drop off in checkout funnels.</li>
          <li><strong className="text-slate-900 font-bold">A/B Testing Program:</strong> Use Optimizely or VWO. Test Hero imagery, CTA button colors (Red vs Yellow), Checkout layouts (1-page vs multi-step).</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'marketing',
    title: 'Marketing Integrations',
    icon: <Mail className="w-5 h-5" />,
    content: (
      <div className="space-y-4">
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li><strong className="text-slate-900 font-bold">Email Marketing:</strong> Klaviyo integration. Set up Abandoned Cart flows (&quot;You left your Chickenjoy behind!&quot;), post-purchase feedback loops, and birthday reward automation.</li>
          <li><strong className="text-slate-900 font-bold">Push Notifications:</strong> Web push for transactional updates (&quot;Your food is being prepared&quot; &rarr; &quot;Out for delivery!&quot;).</li>
          <li><strong className="text-slate-900 font-bold">Loyalty Integration:</strong> API connection to Joy Rewards. Visually show &quot;Points you will earn&quot; next to the subtotal in the cart.</li>
          <li><strong className="text-slate-900 font-bold">Retargeting:</strong> Facebook Pixel and TikTok Pixel for dynamically retargeting cart abandoners with the specific items they left behind.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'security',
    title: 'Security & Compliance',
    icon: <Shield className="w-5 h-5" />,
    content: (
      <div className="space-y-4">
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li><strong className="text-slate-900 font-bold">Data Privacy:</strong> Full compliance with GDPR and particularly the DPA (Data Privacy Act of the Philippines). Implement clear cookie banners and marketing opt-ins.</li>
          <li><strong className="text-slate-900 font-bold">Secure Payments:</strong> PCI-DSS compliance via tokenized payment gateways. The server must never touch or store raw card data.</li>
          <li><strong className="text-slate-900 font-bold">Edge Protection:</strong> Utilize Cloudflare WAF to prevent DDoS attacks during major promos and block malicious bots from scraping the menu/pricing.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'growth',
    title: 'Optimization & Growth',
    icon: <TrendingUp className="w-5 h-5" />,
    content: (
      <div className="space-y-4">
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li><strong className="text-slate-900 font-bold">Continuous Testing Ideas:</strong> &quot;Sticky Add to Cart&quot; row on PDPs vs. Bottom Sheet layouts. A/B testing default tipping amounts.</li>
          <li><strong className="text-slate-900 font-bold">Funnel Tweaks:</strong> Brutally reduce checkout form fields from 12+ down to 8. Implement auto-address autocomplete using the Google Places API to eliminate typing friction.</li>
          <li><strong className="text-slate-900 font-bold">Post-Purchase Growth:</strong> Run ads pushing users to download the native app *only after* a successful, satisfying web delivery order, rather than interrupting the initial funnel.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'wireframes',
    title: 'Wireframe Descriptions',
    icon: <MonitorSmartphone className="w-5 h-5" />,
    content: (
      <div className="space-y-4">
        <div className="bg-slate-900 text-slate-100 p-6 rounded-2xl font-mono text-sm space-y-4 overflow-x-auto shadow-xl">
          <div>
            <span className="text-[#FFC72C] font-bold"># Header (Desktop)</span><br/>
            [Logo Left] | [Menu] [Promos] [Locations] | [Sign In] [Cart Icon (3)]
          </div>
          <div>
            <span className="text-[#FFC72C] font-bold"># Mobile Homepage</span><br/>
            &gt; Top Sticky App Download Banner<br/>
            &gt; Header (Hamburger Menu | Logo | Cart)<br/>
            &gt; Hero Image Carousel (Full width bleeding to edges)<br/>
            &gt; FAB (Bottom Right): &quot;Order Now&quot;<br/>
            &gt; Grid: Menu Categories (Icons + Text)<br/>
            &gt; Carousel: Best Sellers
          </div>
          <div>
            <span className="text-[#FFC72C] font-bold"># Menu Page</span><br/>
            &gt; Top sticky scrollable tabs for Categories (Mobile) / Left Sidebar (Desktop)<br/>
            &gt; Main Area: 2x2 grid of products.<br/>
            &gt; Card: Image, Title, Price, &quot;Add to Order&quot; Button.
          </div>
          <div>
            <span className="text-[#FFC72C] font-bold"># Slide-out Cart (Right Drawer)</span><br/>
            &gt; Top: Progress bar (e.g., &quot;Add ₱150 for Free Delivery&quot;)<br/>
            &gt; Middle: List of items with +/- quantity vertical layout.<br/>
            &gt; Lower-Middle: &quot;You might also like...&quot; (Fries, Pies)<br/>
            &gt; Bottom Sticky Block: Subtotal &amp; &quot;Proceed to Checkout&quot; Button.
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'hacks',
    title: 'Bonus: Conversion Hacks',
    icon: <Lightbulb className="w-5 h-5" />,
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-green-200 bg-green-50 p-5 rounded-2xl shadow-sm">
            <h4 className="font-black text-green-800 flex items-center gap-2 uppercase tracking-tight text-sm"><Zap className="w-4 h-4"/> Psychological Scarcity</h4>
            <p className="text-sm text-green-900 mt-1">Show dynamic inventory levels like &quot;Only 2 Peach Mango Pies left at this branch&quot; or use countdown timers for aggressive flash lunch deals.</p>
          </div>
          <div className="border border-green-200 bg-green-50 p-5 rounded-2xl shadow-sm">
            <h4 className="font-black text-green-800 flex items-center gap-2 uppercase tracking-tight text-sm"><Target className="w-4 h-4"/> Social Proof Bundles</h4>
            <p className="text-sm text-green-900 mt-1">Tag combos or family meals with &quot;Popular for families of 4&quot; or &quot;Best seller today in your area&quot; to reduce decision fatigue.</p>
          </div>
          <div className="border border-green-200 bg-green-50 p-5 rounded-2xl shadow-sm">
            <h4 className="font-black text-green-800 flex items-center gap-2 uppercase tracking-tight text-sm"><Users className="w-4 h-4"/> Gamification</h4>
            <p className="text-sm text-green-900 mt-1">&quot;Spin the wheel&quot; entry popups for first-time visitors to win a free Jolly Crispy Fries with their order. Excellent for building the initial email list.</p>
          </div>
          <div className="border border-green-200 bg-green-50 p-5 rounded-2xl shadow-sm">
            <h4 className="font-black text-green-800 flex items-center gap-2 uppercase tracking-tight text-sm"><LineChart className="w-4 h-4"/> Default Decoys</h4>
            <p className="text-sm text-green-900 mt-1">Show a Medium meal and a Large meal side-by-side where the Large is only ₱20 more, making the upsell feel like a &quot;no-brainer&quot; to the user.</p>
          </div>
        </div>
      </div>
    )
  }
];
