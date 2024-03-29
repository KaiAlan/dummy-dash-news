import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveLine } from "@nivo/line";
import {Link} from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6 min-h-[calc(100vh_-_theme(spacing.16))]">
      <div className="flex flex-col gap-2 md:col-span-2">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <Button className="ml-auto" size="icon" variant="ghost">
            <FileEditIcon className="w-4 h-4" />
            <span className="sr-only">Edit</span>
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="flex flex-col">
                <CardTitle className="text-base">Content Statistics</CardTitle>
                <CardDescription className="text-sm">
                  Your content performance
                </CardDescription>
              </div>
              <Button className="ml-auto" size="icon" variant="ghost">
                <MoreHorizontalIcon className="w-4 h-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <BarChart className="h-[200px] w-full" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="flex flex-col">
                <CardTitle className="text-base">Quick Links</CardTitle>
                <CardDescription className="text-sm">
                  Manage your news feeds
                </CardDescription>
              </div>
              <Button className="ml-auto" size="icon" variant="ghost">
                <MoreHorizontalIcon className="w-4 h-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <Button className="rounded-lg" variant="ghost">
                News Feed 1
              </Button>
              <Button className="rounded-lg" variant="ghost">
                News Feed 2
              </Button>
              <Button className="rounded-lg" variant="ghost">
                News Feed 3
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="grid gap-4 md:col-span-2 md:grid-rows-2">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <UserIcon className="w-8 h-8 rounded-full bg-gradient-to-tr from-rose-500 to-rose-600 text-rose-50" />
            <div className="flex flex-col">
              <CardTitle className="text-base">Users Status</CardTitle>
              <CardDescription className="text-sm">
                Active users in the last 30 minutes
              </CardDescription>
            </div>
            <Button className="ml-auto" size="icon" variant="ghost">
              <MoreHorizontalIcon className="w-4 h-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <CurvedlineChart className="h-[200px] w-full" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <FileTextIcon className="w-8 h-8" />
            <div className="flex flex-col">
              <CardTitle className="text-base">Top Performing News</CardTitle>
              <CardDescription className="text-sm">
                Most viewed news articles
              </CardDescription>
            </div>
            <Button className="ml-auto" size="icon" variant="ghost">
              <MoreHorizontalIcon className="w-4 h-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </CardHeader>
          <CardContent className="grid gap-2 text-sm">
            <div className="flex items-center gap-2">
              <ChevronRightIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <Link className="font-medium" to="#">
                Introducing Vercel: The Fastest Way to Build Your News Site
              </Link>
              <span className="text-gray-500 dark:text-gray-400">
                2,321 views
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ChevronRightIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <Link className="font-medium" to="#">
                How to Optimize Images for Web: A Comprehensive Guide
              </Link>
              <span className="text-gray-500 dark:text-gray-400">
                1,943 views
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ChevronRightIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <Link className="font-medium" to="#">
                Breaking News: The Rise of Serverless Computing
              </Link>
              <span className="text-gray-500 dark:text-gray-400">
                1,754 views
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ChevronRightIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <Link className="font-medium" to="#">
                Exclusive Interview: The Future of Frontend Frameworks
              </Link>
              <span className="text-gray-500 dark:text-gray-400">
                1,432 views
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ChevronRightIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <Link className="font-medium" to="#">
                The Art of Web Design: Balancing Aesthetics and Performance
              </Link>
              <span className="text-gray-500 dark:text-gray-400">
                1,231 views
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:col-span-2 md:grid-rows-2">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <ShareIcon className="w-8 h-8" />
            <div className="flex flex-col">
              <CardTitle className="text-base">Top Shared News</CardTitle>
              <CardDescription className="text-sm">
                Most shared news articles
              </CardDescription>
            </div>
            <Button className="ml-auto" size="icon" variant="ghost">
              <MoreHorizontalIcon className="w-4 h-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </CardHeader>
          <CardContent className="grid gap-2 text-sm">
            <div className="flex items-center gap-2">
              <ChevronRightIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <Link className="font-medium" to="#">
                Introducing Vercel: The Fastest Way to Build Your News Site
              </Link>
              <span className="text-gray-500 dark:text-gray-400">
                2,321 views
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ChevronRightIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <Link className="font-medium" to="#">
                How to Optimize Images for Web: A Comprehensive Guide
              </Link>
              <span className="text-gray-500 dark:text-gray-400">
                1,943 views
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ChevronRightIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <Link className="font-medium" to="#">
                Breaking News: The Rise of Serverless Computing
              </Link>
              <span className="text-gray-500 dark:text-gray-400">
                1,754 views
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ChevronRightIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <Link className="font-medium" to="#">
                Exclusive Interview: The Future of Frontend Frameworks
              </Link>
              <span className="text-gray-500 dark:text-gray-400">
                1,432 views
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ChevronRightIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <Link className="font-medium" to="#">
                The Art of Web Design: Balancing Aesthetics and Performance
              </Link>
              <span className="text-gray-500 dark:text-gray-400">
                1,231 views
              </span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <MessageSquareIcon className="w-8 h-8" />
            <div className="flex flex-col">
              <CardTitle className="text-base">Top Commented News</CardTitle>
              <CardDescription className="text-sm">
                Most commented news articles
              </CardDescription>
            </div>
            <Button className="ml-auto" size="icon" variant="ghost">
              <MoreHorizontalIcon className="w-4 h-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </CardHeader>
          <CardContent className="grid gap-2 text-sm">
            <div className="flex items-center gap-2">
              <ChevronRightIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <Link className="font-medium" to="#">
                Introducing Vercel: The Fastest Way to Build Your News Site
              </Link>
              <span className="text-gray-500 dark:text-gray-400">
                2,321 views
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ChevronRightIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <Link className="font-medium" to="#">
                How to Optimize Images for Web: A Comprehensive Guide
              </Link>
              <span className="text-gray-500 dark:text-gray-400">
                1,943 views
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ChevronRightIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <Link className="font-medium" to="#">
                Breaking News: The Rise of Serverless Computing
              </Link>
              <span className="text-gray-500 dark:text-gray-400">
                1,754 views
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ChevronRightIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <Link className="font-medium" to="#">
                Exclusive Interview: The Future of Frontend Frameworks
              </Link>
              <span className="text-gray-500 dark:text-gray-400">
                1,432 views
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ChevronRightIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <Link to="#" className="font-medium">
                The Art of Web Design: Balancing Aesthetics and Performance
              </Link>
              <span className="text-gray-500 dark:text-gray-400">
                1,231 views
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function BarChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  );
}

function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function CurvedlineChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

function FileEditIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  );
}

function FileTextIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  );
}

function MessageSquareIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function MoreHorizontalIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  );
}

function ShareIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}

function UserIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
