'use client'
import { useState } from 'react';
import {
  Image as ImageIcon,
  Type,
  Tag,
  Send,
  X,
  PlusCircle,
  Loader2
} from 'lucide-react';
import { createBlog } from '@/actions/blogActions';
import { toast } from 'react-hot-toast';

interface Props {
  onSuccess?: () => void;
}

const CreateBlog = ({ onSuccess }: Props) => {
  const [tags, setTags] = useState<string[]>(['Education', 'Visa']);
  const [tagInput, setTagInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        toast.error("Image size must be less than 2MB");
        return;
      }
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.append('tags', JSON.stringify(tags));

    try {
      const result = await createBlog(formData);

      if (result.success) {
        toast.success(result.message || "Blog published!");
        if (onSuccess) onSuccess();
      } else {
        if (result.errors) {
          // Show first error
          const firstError = Object.values(result.errors)[0];
          toast.error(typeof firstError === 'string' ? firstError : (Array.isArray(firstError) ? firstError[0] : "Validation error"));
        } else {
          toast.error(result.message || "Failed to publish blog");
        }
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20">
      <div className="max-w-4xl mx-auto px-4 mt-10">
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

          {/* Main Content Area */}
          <div className="p-8 md:p-12">

            {/* Image Upload Placeholder */}
            <div className="relative group cursor-pointer mb-10">
              {preview ? (
                <div className="relative w-full h-64 md:h-80 rounded-3xl overflow-hidden">
                  <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={() => setPreview(null)}
                    className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full"
                  >
                    <X size={20} />
                  </button>
                </div>
              ) : (
                <label className="w-full h-64 md:h-80 bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl flex flex-col items-center justify-center transition-all group-hover:bg-gray-100 group-hover:border-[#1a8a81]/30 cursor-pointer">
                  <div className="bg-white p-4 rounded-full shadow-md mb-4 group-hover:scale-110 transition-transform">
                    <ImageIcon className="w-8 h-8 text-gray-400 group-hover:text-[#1a8a81]" />
                  </div>
                  <p className="text-gray-500 font-medium">Click to upload featured image</p>
                  <p className="text-gray-400 text-xs mt-1">Recommended: 1200 x 630 px (PNG, JPG)</p>
                  <input type="file" name="image" className="hidden" accept="image/*" onChange={handleImageChange} />
                </label>
              )}
            </div>

            {/* Post Title */}
            <div className="mb-8">
              <label className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 ml-1">
                <Type className="w-3.5 h-3.5" /> Post Title
              </label>
              <input
                name="title"
                type="text"
                placeholder="Enter a catchy title here..."
                required
                className="w-full text-3xl md:text-4xl font-black text-[#0d4a7e] placeholder:text-gray-200 border-none focus:ring-0 p-0 leading-tight outline-none"
              />
            </div>

            {/* Meta Info: Category & Read Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div>
                <label className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 ml-1">
                  <Tag className="w-3.5 h-3.5" /> Category
                </label>
                <select name="category" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-gray-600 focus:outline-none focus:border-[#1a8a81] transition-all">
                  <option value="Education">Education</option>
                  <option value="Scholarship">Scholarship</option>
                  <option value="Visa">Visa</option>
                  <option value="Lifestyle">Lifestyle</option>
                </select>
              </div>
              <div>
                <label className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 ml-1">
                  <ImageIcon className="w-3.5 h-3.5" /> Read Time (Min)
                </label>
                <input
                  name="readTime"
                  type="number"
                  placeholder="e.g. 5"
                  required
                  min="1"
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-gray-600 focus:outline-none focus:border-[#1a8a81]"
                />
              </div>
            </div>

            {/* Rich Text Placeholder */}
            <div className="mb-10">
              <label className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 ml-1">
                Content Body
              </label>
              <textarea
                name="content"
                placeholder="Tell your story... Use markdown or plain text."
                rows={12}
                required
                className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-5 text-gray-700 leading-relaxed focus:outline-none focus:border-[#1a8a81] transition-all resize-none"
              ></textarea>
            </div>

            {/* Tags Input Area */}
            <div className="pt-8 border-t border-gray-50">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 block ml-1">
                Search Engine Tags
              </label>
              <div className="flex flex-wrap gap-2 items-center">
                {tags.map((tag, i) => (
                  <span key={i} className="flex items-center gap-2 px-3 py-1.5 bg-[#f0fdfa] text-[#1a8a81] rounded-lg text-sm font-bold border border-[#ccfbf1]">
                    {tag} <X className="w-3 h-3 cursor-pointer hover:text-red-500" onClick={() => removeTag(tag)} />
                  </span>
                ))}

                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    placeholder="Add tag"
                    className="bg-transparent border-none outline-none text-sm w-24"
                    onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddTag(); } }}
                  />
                  <button type="button" onClick={handleAddTag} className="text-gray-400 hover:text-[#1a8a81]">
                    <PlusCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-10 flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 px-8 py-3 bg-[#1a8a81] text-white font-bold rounded-xl hover:bg-[#146b64] transition-all disabled:opacity-50"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Send size={18} />}
                {loading ? "Publishing..." : "Publish Blog"}
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;