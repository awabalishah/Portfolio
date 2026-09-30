// Client testimonials shown in the testimonials slider. One object per slide, in order.
//
//   period     Small label above the headline (optional)
//   headline   The outcome, in one line
//   summary    One plain sentence of context (optional)
//   quote      What the client said, shown in italics
//   metrics    Up to 3 numbers, each { value, label } (optional)
//   client     Who said it. Keep it anonymous if the client hasn't agreed to be named
//   practice   Second line under the client
//   media      Optional: { type: 'video', src: '/testimonials/xyz.mp4' }
//              or { type: 'image', src: '/testimonials/xyz.jpg', alt: '...' }
//   draft      true hides the slide on the live site (it still shows on previews).

export const testimonials = [
    {
        headline: 'Leads booked within two minutes, not the next morning',
        client: 'Clinic partner',
        practice: 'Verified medical practice founder',
        quote: 'The speed-to-lead system Awab implemented caught leads that used to sit in our inbox overnight. Booking them within two minutes completely solved our scheduling leakage.',
        metrics: [
            { value: '40+', label: 'Appointments recovered' },
            { value: '3.8x', label: 'Return on ad spend' },
        ],
        media: { type: 'video', src: '/VID-20260530-WA0001.mp4' },
    },
];
