// Client results shown in the slider on the homepage. One object per slide.
//
//   headline   The outcome, in one line ("31 appointments booked in 1 month")
//   client     Who it was for ("Dr. Smith, Riverside Vein Center"), or keep it anonymous
//   practice   Practice type + location ("Pain clinic · Dallas, TX")
//   quote      What the client said (optional)
//   metrics    Up to 3 numbers, each { value, label }
//   media      Optional proof: { type: 'image', src: '/results/xyz.png' }
//              or { type: 'video', src: '/results/xyz.mp4' }
//              Put the files in /public/results/.
//   draft      true hides the slide on the live site. Remove it once the slide is real.

export const results = [
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
    {
        headline: '[Result headline, e.g. 31 new patients booked in 30 days]',
        client: '[Client name]',
        practice: '[Practice type · City, State]',
        quote: '[What the client said about working with you]',
        metrics: [
            { value: '[00]', label: '[Metric]' },
            { value: '[00]', label: '[Metric]' },
            { value: '[00]', label: '[Metric]' },
        ],
        media: null,
        draft: true,
    },
    {
        headline: '[Result headline, e.g. $25K added in the first month]',
        client: '[Client name]',
        practice: '[Practice type · City, State]',
        quote: '[What the client said about working with you]',
        metrics: [
            { value: '[00]', label: '[Metric]' },
            { value: '[00]', label: '[Metric]' },
        ],
        media: null,
        draft: true,
    },
];
