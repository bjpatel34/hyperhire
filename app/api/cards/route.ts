import { NextResponse } from 'next/server';

export async function GET() {
  const cards = [
    { id: "item1", title: "Abhishek Gupta", content: "마케팅 · 2y+", htmlFor: "item-1" },
    { id: "item2", title: "Brijesh Movaliya", content: "마케팅 · 2y+", htmlFor: "item-2" },
    { id: "item3", title: "Arun Gupta", content: "마케팅 · 2y+", htmlFor: "item-3" },
  ];
  
  return NextResponse.json(cards);
}