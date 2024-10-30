import MaxWidthContainer from "@components/layout/maxwidthcontainer";
import { H1 } from "@components/typography/h1";
import { newevents } from "@data/events";
import { calendarConfig } from "@full-calender-config";
import FullCalender from "@shadcn-fullcalender/full-calender";

export default function Home() {
    return (
        <MaxWidthContainer>
            <section className="py-20 space-y-6">
                <FullCalender events={newevents} config={calendarConfig} />
            </section>
        </MaxWidthContainer>
    );
}
