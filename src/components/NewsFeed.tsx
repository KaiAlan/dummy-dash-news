import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export default function NewsFeed() {
    return (
        <div className="grid gap-4 lg:grid-cols-[300px_1fr]">
            <div className="p-4 space-y-4 border lg:p-6">
                <div className="space-y-2">
                    <h1 className="text-2xl font-semibold">Create News Feed</h1>
                    <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                        Fill in the form to create a new news feed
                    </p>
                </div>
                <div className="space-y-6">
                    <div className="space-y-2">
                        <Label className="text-sm" htmlFor="title">
                            Title
                        </Label>
                        <Input id="title" placeholder="Enter the title" required />
                    </div>
                    <div className="space-y-2">
                        <Label className="text-sm" htmlFor="content">
                            Content
                        </Label>
                        <Textarea className="min-h-[150px]" id="content" placeholder="Enter the content" required />
                    </div>
                    <div className="space-y-2">
                        <Label className="text-sm" htmlFor="category">
                            Category
                        </Label>
                        <Select defaultValue="announcement" id="category">
                            <option value="announcement">Announcement</option>
                            <option value="update">Update</option>
                            <option value="event">Event</option>
                            <option value="other">Other</option>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label className="text-sm" htmlFor="media">
                            Media
                        </Label>
                        <Input accept="image/, video/" id="media" multiple type="file" />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <Button size="lg">Save</Button>
                    <Button size="lg" variant="outline">
                        Preview
                    </Button>
                </div>
            </div>
            <div className="p-4 space-y-4 border lg:p-6">
                <div className="space-y-2">
                    <h1 className="text-2xl font-semibold">News Feed</h1>
                    <p className="text-sm leading-none text-gray-500 dark:text-gray-400">Manage your news feeds</p>
                </div>
                <div className="border rounded-lg">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-1/3">Title</TableHead>
                                <TableHead className="w-1/3">Category</TableHead>
                                <TableHead className="w-1/3">Date</TableHead>
                                <TableHead className="w-1/3">Status</TableHead>
                                <TableHead className="w-1/3 text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-semibold">Introducing Shadcn UI</TableCell>
                                <TableCell>Announcement</TableCell>
                                <TableCell>2023-08-15</TableCell>
                                <TableCell>Draft</TableCell>
                                <TableCell className="text-right">
                                    <div>
                                        <div className="rounded-md w-6 h-6 flex items-center justify-center">
                                            <MoreHorizontalIcon className="w-4 h-4" />
                                            <span className="sr-only">More</span>
                                        </div>
                                        <div className="w-56">
                                            <div>
                                                <div>View</div>
                                                <div>Edit</div>
                                                <div>Published</div>
                                                <div>Delete</div>
                                            </div>
                                        </div>
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-semibold">Shadcn UI: A New Way to Build Web Interfaces</TableCell>
                                <TableCell>Update</TableCell>
                                <TableCell>2023-08-10</TableCell>
                                <TableCell>Published</TableCell>
                                <TableCell className="text-right">
                                    <div>
                                        <div className="rounded-md w-6 h-6 flex items-center justify-center">
                                            <MoreHorizontalIcon className="w-4 h-4" />
                                            <span className="sr-only">More</span>
                                        </div>
                                        <div className="w-56">
                                            <div>
                                                <div>View</div>
                                                <div>Published</div>
                                                <div>Edit</div>
                                                <div>Delete</div>
                                            </div>
                                        </div>
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-semibold">Upcoming Webinar: Mastering Tailwind CSS</TableCell>
                                <TableCell>Event</TableCell>
                                <TableCell>2023-08-05</TableCell>
                                <TableCell>Published</TableCell>
                                <TableCell className="text-right">
                                    <div>
                                        <div className="rounded-md w-6 h-6 flex items-center justify-center">
                                            <MoreHorizontalIcon className="w-4 h-4" />
                                            <span className="sr-only">More</span>
                                        </div>
                                        <div className="w-56">
                                            <div>
                                                <div>View</div>
                                                <div>Published</div>
                                                <div>Edit</div>
                                                <div>Delete</div>
                                            </div>
                                        </div>
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

function MoreHorizontalIcon(props) {
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
            <circlecx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
        </svg>
    )
}