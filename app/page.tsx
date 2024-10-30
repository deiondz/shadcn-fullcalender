import ConfigSnippet from "@components/layout/code-block";
import FullCalenderCodeSnippet from "@components/layout/code-full";
import MaxWidthContainer from "@components/layout/maxwidthcontainer";
import { H1 } from "@components/typography/h1";
import { Button } from "@components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <MaxWidthContainer>
      <section className="py-20 space-y-6">
        <div>
          <Link href="/full-calender" >
            <Button variant="gooeyLeft">Go to Full Calender</Button>
          </Link>
        </div>
        <H1>Hi, Deion here.</H1>
        <p className="text-sm">
          This is a custom Full Calendar component I recreated based on <Link target="_blank" className=" text-red-700 font-semibold" href="https://github.com/0xBoom"> 0xBoom's</Link> version, which I originally discovered in a
          <Link target="_blank" className=" text-blue-600 font-semibold" href="https://github.com/shadcn-ui/ui/discussions/3214#discussioncomment-10702520"> GitHub discussion</Link> about Full Calendar components made with ShadCN. Since many people are eagerly awaiting the release of <Link target="_blank" className=" text-orange-700 font-semibold" href="https://0xboom-shadcn-event-calendar.vercel.app/"> his version</Link>, I decided to create a similar one that includes both month and year views. While it may not yet have all of 0xBoom's features, I aimed to replicate the functionality as closely as possible. Looking forward to the official release! 🚀
        </p>
        <p className="text-sm">
          Feel free to contribute to the project by submitting a pull request or opening an issue on the <Link className=" text-blue-600 font-medium" href="">GitHub repository</Link>.
        </p>
        <p className="text-sm">
          If you have any questions or suggestions, feel free to reach out to me on Twitter <Link className=" text-blue-600 font-medium" href="https://x.com/Deion_Dz" target="_blank">@Deion_Dz</Link>.
        </p>
        <p className="text-sm">
          You can further customize the Full Calender component by creating a config file and adding it to the component. Follow the config file given in the code to add changes to your full calender.
        </p>
        <p className="text-sm">
          The config file contains the following options:
        </p>
        <ConfigSnippet />
        <p className="text-sm">
          Pass the events and config to the FullCalender component to render the calendar.
        </p>
        <FullCalenderCodeSnippet />
      </section>
    </MaxWidthContainer>
  );
}
