

// Corrected type definition: Use 'interface' or 'type Alias ='
interface TProcessProps {
    /**
     * The percentage of the process completed (0-100).
     */
    process: number;
    /**
     * Optional: The color of the progress bar.
     * @default '#2563eb' (Tailwind's blue-600)
     */
    color?: string;
}

// Corrected prop destructuring: Destructure 'process' directly from the props object
// Added React.FC for better type checking and clarity
const ProcessComponent: React.FC<TProcessProps> = ({
    process, // Destructure 'process' directly
    color = '#2563eb' // Destructure 'color' and provide a default value
}) => {

    // Clamp the process value between 0 and 100 for valid CSS width
    const validProcess = Math.max(0, Math.min(100, process));

    return (
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            {/* Use the 'process' prop for the width and 'color' for background */}
            <div
                className="h-2.5 rounded-full" // Removed hardcoded bg-blue-600
                style={{
                    width: `${validProcess}%`,
                    backgroundColor: color // Use the color prop
                }}
            ></div>
        </div>
    );
}

export default ProcessComponent;
