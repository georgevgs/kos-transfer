import { Button } from "./components/ui/button"

interface ErrorFallbackProps {
    error: Error
    resetErrorBoundary: () => void
}

export const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="mb-6 p-6 border-2 border-red-500 rounded-lg bg-red-50">
                    <div className="flex items-start gap-3 mb-3">
                        <svg 
                            className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
                            />
                        </svg>
                        <div>
                            <h3 className="font-semibold text-red-900 mb-1">Application Error</h3>
                            <p className="text-sm text-red-700">
                                Something unexpected happened. Please try again or contact support if the problem persists.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="bg-card border rounded-lg p-4 mb-6">
                    <h3 className="font-semibold text-sm text-muted-foreground mb-2">Error Details:</h3>
                    <pre className="text-xs text-red-600 bg-muted/50 p-3 rounded border overflow-auto max-h-32">
                        {error.message}
                    </pre>
                </div>
                
                <Button 
                    onClick={handleReset(resetErrorBoundary)} 
                    className="w-full"
                    variant="outline"
                >
                    <svg 
                        className="w-4 h-4 mr-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
                        />
                    </svg>
                    Try Again
                </Button>
            </div>
        </div>
    )
}

const handleReset = (resetFunction: () => void) => {
    return () => {
        resetFunction()
    }
}
