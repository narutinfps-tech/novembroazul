export interface SlideItem {
  id: string;
  number: number;
  title: string;
  category: string;
  description: string;
  previewContent: {
    badge?: string;
    headline: string;
    subheadline?: string;
    points: { title: string; text: string }[];
    highlightBox?: { label: string; text: string };
    footerNote?: string;
  };
}

export interface OfferPlan {
  id: 'essencial' | 'completo';
  name: string;
  price: string;
  priceNumeric: number;
  tag?: string;
  features: string[];
  buttonText: string;
  checkoutPlaceholderUrl: string;
  isFeatured?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TestimonialSlot {
  id: string;
  name: string;
  role: string;
  feedback: string;
  isFilled: boolean;
}
