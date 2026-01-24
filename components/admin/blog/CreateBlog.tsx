'use client'
import { useState } from 'react';
import { 
  Image as ImageIcon, 
  Type, 
  Tag, 
  Send, 
  X, 
  Eye, 
  Save,
  PlusCircle,
  FileText
} from 'lucide-react';

const CreateBlog = () => {
  const [tags, setTags] = useState(['Education', 'Visa']);
  const [preview, setPreview] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20">
  

      <div className="max-w-4xl mx-auto px-4 mt-10">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          
          {/* Main Content Area */}
          <div className="p-8 md:p-12">
            
            {/* Image Upload Placeholder */}
            <div className="relative group cursor-pointer mb-10">
              <div className="w-full h-64 md:h-80 bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl flex flex-col items-center justify-center transition-all group-hover:bg-gray-100 group-hover:border-[#1a8a81]/30">
                <div className="bg-white p-4 rounded-full shadow-md mb-4 group-hover:scale-110 transition-transform">
                  <ImageIcon className="w-8 h-8 text-gray-400 group-hover:text-[#1a8a81]" />
                </div>
                <p className="text-gray-500 font-medium">Click to upload featured image</p>
                <p className="text-gray-400 text-xs mt-1">Recommended: 1200 x 630 px (PNG, JPG)</p>
              </div>
            </div>

            {/* Post Title */}
            <div className="mb-8">
              <label className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 ml-1">
                <Type className="w-3.5 h-3.5" /> Post Title
              </label>
              <input 
                type="text" 
                placeholder="Enter a catchy title here..."
                className="w-full text-3xl md:text-4xl font-black text-[#0d4a7e] placeholder:text-gray-200 border-none focus:ring-0 p-0 leading-tight"
              />
            </div>

            {/* Meta Info: Category & Read Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div>
                <label className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 ml-1">
                  <Tag className="w-3.5 h-3.5" /> Category
                </label>
                <select className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-gray-600 focus:outline-none focus:border-[#1a8a81] transition-all">
                  <option>Education</option>
                  <option>Scholarship</option>
                  <option>Visa</option>
                  <option>Lifestyle</option>
                </select>
              </div>
              <div>
                <label className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 ml-1">
                  <ImageIcon className="w-3.5 h-3.5" /> Read Time (Min)
                </label>
                <input 
                  type="number" 
                  placeholder="e.g. 5"
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
                placeholder="Tell your story... Use markdown or plain text."
                rows={12}
                className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-5 text-gray-700 leading-relaxed focus:outline-none focus:border-[#1a8a81] transition-all resize-none"
              ></textarea>
            </div>

            {/* Tags Input Area */}
            <div className="pt-8 border-t border-gray-50">
               <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 block ml-1">
                Search Engine Tags
              </label>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <span key={i} className="flex items-center gap-2 px-3 py-1.5 bg-[#f0fdfa] text-[#1a8a81] rounded-lg text-sm font-bold border border-[#ccfbf1]">
                    {tag} <X className="w-3 h-3 cursor-pointer hover:text-red-500" />
                  </span>
                ))}
                <button className="flex items-center gap-1 px-3 py-1.5 text-gray-400 hover:text-[#1a8a81] text-sm font-bold border border-dashed border-gray-200 rounded-lg transition-all">
                  <PlusCircle className="w-4 h-4" /> Add Tag
                </button>
              </div>
            </div>

          </div>
        </div>
        
        <p className="text-center text-gray-400 text-sm mt-8">
          Post will be visible in the blog section after publishing. 
          <br /> Need help? <span className="text-[#1a8a81] underline cursor-pointer">Guide for Writing</span>
        </p>
      </div>
    </div>
  );
};

export default CreateBlog;