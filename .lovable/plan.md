

# Update Prompts in TransformationAnimation and Quant Section

## Changes

### 1. TransformationAnimation.tsx — Replace insight rows with real prompts
Replace the current generic insights (Signal, Risk, Alpha, Action) with curated example prompts split into two categories:

**Forecasting queries:**
- "Compare 5-day forecasts for TSLA using Prophet, XGBoost, and Ensemble (ARIMA+ETS). Which model predicts the highest price?"
- "Forecast NVDA using XGBoost for the next 5 days. Show top 10 features and MAPE on test set."

**Fundamental queries:**
- "Compare the ESG scores of major tech companies"
- "What is Amazon's free cash flow trend?"
- "How has Apple's gross margin trended over the last 8 quarters?"

Display them as two labeled groups (Forecasting, Fundamental) in the right-side "Actionable Insights" panel, styled as monospace query blocks rather than label/value pairs.

### 2. WorkflowsTab.tsx — Upgrade Quant example workflows
Replace the current 3 generic Quant examples with the most impressive prompts from the provided list:

- "Forecast BTC-USD price for next 10 days"
- "Detect market regimes for AAPL over the last year"
- "Test cointegration between SPY and QQQ"
- "Analyze the impulse response of SPY to a shock in TLT. Trace the effect over 20 periods."
- "For SPY: Detect Markov regimes, fit GJR-GARCH for volatility, fit HAR model for decomposition"
- "Use SARIMAX to forecast XOM including CL (Crude Oil) as an exogenous variable"

Also add a new **"Code Generation"** subsection to the Quant section describing ALICE's ability to generate executable Python code for quantitative analysis, with a couple of example prompts.

### 3. Files to edit
- `src/components/apex/TransformationAnimation.tsx` — replace insights data and layout
- `src/components/apex/WorkflowsTab.tsx` — update Quant examples, add code generation capability mention

