import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter flex items-center">
        Hey, I'm Joshua Yu!
        <img
          src="\blog-assets\yellowCircle.jpg" // Replace this with the correct path to your icon
          alt="Icon"
          className="ml-2 w-7 h-7" // Adjust the size of the icon as needed
        />
      </h1>
      <p className="mb-4">
        I’m a Computer Engineering major at UCF with a passion for the intersection of engineering and music. Someday, I'd love to work in a field that combines my love for both. In the meantime, I’ve been working on projects and sharpening my skills in DSP, embedded software development and design, mixed-signal electronics, applied ML/AI, and even a bit of full-stack web development. Check out the posts below to see what I’ve been up to!
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
