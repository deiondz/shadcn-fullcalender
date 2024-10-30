export default function FullCalenderCodeSnippet() {
    return (
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Configuration Snippet</h2>
            <pre className="overflow-auto text-sm">
                <code>
                    {`<FullCalender events={newevents} config={calendarConfig} />`}
                </code>
            </pre>
        </div>
    );
}
