import SettingTabs from '@/components/SettingTabs'
import { InputControl, InputPrefix, InputRoot } from '@/components/Input'
import * as FileInput from '@/components/Form/FileInput'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import { Select } from '@/components/Select'
import { SelectItem } from '@/components/Select/SelectItem'
import { Button } from '@/components/Button'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Setting</h1>

      <SettingTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              className="rounded-lg border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
              type="button"
              variant="outline"
            >
              Cancel
            </Button>
            <Button
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
              variant="primary"
              type="submit"
              form="setting"
            >
              Save
            </Button>
          </div>
        </div>

        <form
          id="setting"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid grid-cols-form gap-3">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="firstName"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <InputRoot>
                <InputControl id="firstName" defaultValue="Edson" />
              </InputRoot>

              <InputRoot>
                <InputControl defaultValue="Ottoni" />
              </InputRoot>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="email"
            >
              email
            </label>

            <InputRoot>
              <InputPrefix>
                <Mail className="h-5 w-5" />
              </InputPrefix>
              <InputControl id="email" defaultValue="edson.ottoni@gmail.com" />
            </InputRoot>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="photo"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile
              </span>
            </label>

            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label className="text-sm font-medium text-zinc-700" htmlFor="role">
              Role
            </label>
            <div className="grid grid-cols-2 gap-6">
              <InputRoot>
                <InputControl id="role" defaultValue="CTO" />
              </InputRoot>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="country"
            >
              Country
            </label>

            <Select placeholder="Select a country...">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United State" />
              <SelectItem value="mx" text="Mexico" />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="timezone"
            >
              Timezone
            </label>

            <Select placeholder="Select a country...">
              <SelectItem value="br" text="Pacific Standard Time (UTC-08:00)" />
              <SelectItem value="us" text="America São Paulo (UTC-03:00)" />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label className="text-sm font-medium text-zinc-700" htmlFor="bio">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction
              </span>
            </label>

            <div className="space-y-3">
              <div className="gap grid grid-cols-2">
                <Select placeholder="">
                  <SelectItem
                    value="normal"
                    defaultValue="normal"
                    text="Normal"
                  />
                </Select>

                <div className="flex items-center gap-1">
                  <Button variant="ghost" type="button">
                    <Bold className="h-4 w-4 text-zinc-500" />
                  </Button>

                  <Button variant="ghost" type="button">
                    <Italic className="h-4 w-4 text-zinc-500" />
                  </Button>

                  <Button variant="ghost" type="button">
                    <Link className="h-4 w-4 text-zinc-500" />
                  </Button>

                  <Button variant="ghost" type="button">
                    <List className="h-4 w-4 text-zinc-500" />
                  </Button>

                  <Button variant="ghost" type="button">
                    <ListOrdered className="h-4 w-4 text-zinc-500" />
                  </Button>
                </div>
              </div>
              <textarea
                className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
                id="bio"
                defaultValue={
                  'lo Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="portfolio projects"
            >
              Portfolio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>

            <FileInput.Root className="items-start gap-5">
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button variant="outline" type="button">
              cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </div>
    </>
  )
}
