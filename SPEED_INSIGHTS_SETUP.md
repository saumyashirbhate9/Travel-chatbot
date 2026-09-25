# Vercel Speed Insights Setup

This project has been configured with Vercel Speed Insights to monitor real-user performance metrics.

## What is Speed Insights?

Vercel Speed Insights captures real user monitoring (RUM) data to help you understand how your application performs for actual users. It tracks Core Web Vitals and provides actionable insights to improve performance.

## Installation

The `@vercel/speed-insights` package has been installed in the frontend:

```bash
cd frontend
npm install @vercel/speed-insights
```

## Configuration

Speed Insights has been integrated into the React application following the official Vercel documentation.

### Implementation Details

**File: `frontend/src/App.jsx`**

```jsx
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Your app content */}
      </div>
      <SpeedInsights />
    </Router>
  );
}
```

The `<SpeedInsights />` component is added at the root level of the application, which automatically:
- Tracks Core Web Vitals (LCP, FID, CLS, FCP, TTFB, INP)
- Sends performance data to Vercel
- Operates with minimal performance impact

## Deployment

To see Speed Insights in action:

1. **Deploy to Vercel:**
   ```bash
   vercel deploy
   ```

2. **Connect Git Repository:**
   - Push your code to GitHub
   - Import the repository in Vercel Dashboard
   - Automatic deployments will be configured

3. **View Metrics:**
   - Navigate to your project in the Vercel Dashboard
   - Click on "Speed Insights" tab
   - View real-time performance metrics (data appears after user visits)

## Local Development

Speed Insights works automatically in development mode, but metrics are only sent when:
- Running on Vercel's platform (preview or production)
- The `VERCEL_ENV` environment variable is set

For local testing, Speed Insights will be inactive but won't cause errors.

## Framework Support

This implementation uses the React/Vite integration (`@vercel/speed-insights/react`). The package also supports:
- Next.js: `@vercel/speed-insights/next`
- SvelteKit: `@vercel/speed-insights/sveltekit`
- Vue: `@vercel/speed-insights/vue`
- Nuxt: Module configuration
- Remix: `@vercel/speed-insights/remix`

## Privacy & Compliance

Vercel Speed Insights:
- Does not use cookies
- Collects anonymized performance data only
- Is GDPR and privacy-regulation compliant
- Does not track personally identifiable information

## Additional Resources

- [Official Documentation](https://vercel.com/docs/speed-insights)
- [Quickstart Guide](https://vercel.com/docs/speed-insights/quickstart)
- [Understanding Metrics](https://vercel.com/docs/speed-insights/metrics)
- [Cost Management](https://vercel.com/docs/speed-insights/limits-and-pricing)

## Dependencies

```json
{
  "@vercel/speed-insights": "^1.0.12"
}
```

## Verification

After deployment:
1. Visit your deployed site
2. Check browser DevTools Network tab for requests to `/_vercel/speed-insights`
3. Return to Vercel Dashboard after a few hours to see collected metrics

---

**Last Updated:** September 25, 2026
**Documentation Source:** https://vercel.com/docs/speed-insights/quickstart
