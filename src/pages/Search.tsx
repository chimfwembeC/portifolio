import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import debounce from "lodash/debounce";
import { skills } from "../data/SkillData";
import { projects } from "../data/projectsData";
import { partners } from "../data/PartnerData";
import { services } from "../data/servicesData";
import { testimonials } from "../data/testimonialsData";

interface SearchItem {
  id: number;
  name?: string;
  title?: string;
  description?: string;
  type: string;
}

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);

  // Debounce the search input
  const handleSearch = debounce((searchTerm: string) => {
    const lowerCaseTerm = searchTerm.toLowerCase();

    // Aggregate all data with type
    const allData: SearchItem[] = [
      ...skills.map((skill, index) => ({ ...skill, id: index + 1, type: "Skill" })),
      ...projects.map((project, index) => ({
        ...project,
        id: skills.length + index + 1,
        type: "Project",
      })),
      ...partners.map((partner, index) => ({
        ...partner,
        id: skills.length + projects.length + index + 1,
        type: "Partner",
      })),
      ...services.map((service, index) => ({
        ...service,
        id: skills.length + projects.length + partners.length + index + 1,
        type: "Service",
      })),
      ...testimonials.map((testimony, index) => ({
        ...testimony,
        id: skills.length + projects.length + partners.length + services.length + index + 1,
        type: "Testimony",
      })),
    ];

    // Filter based on search term
    const filteredResults = allData.filter((item) => {
      const itemName = item.name?.toLowerCase() || item.title?.toLowerCase() || "";
      return itemName.includes(lowerCaseTerm);
    });

    setResults(filteredResults);
  }, 300); // 300ms debounce delay

  // Update query and trigger search
  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);
    handleSearch(searchTerm);
  };

  // Helper to highlight search term in results
  const highlightMatch = (text: string, query: string) => {
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, index) => (
      <span
        key={index}
        style={{
          fontWeight: part.toLowerCase() === query.toLowerCase() ? "bold" : "normal",
          color: part.toLowerCase() === query.toLowerCase() ? "orange" : "black",
        }}
      >
        {part}
      </span>
    ));
  };

  // Group results by type
  const groupResultsByType = (results: SearchItem[]) => {
    return results.reduce((grouped, item) => {
      (grouped[item.type] = grouped[item.type] || []).push(item);
      return grouped;
    }, {} as Record<string, SearchItem[]>);
  };

  const groupedResults = groupResultsByType(results);

  return (
    <div className="relative bg-gradient-to-t from-gray-700 to-orange-800 text-white py-20 px-6 md:px-10 lg:px-20 h-screen">
      <div className="container mx-auto mt-10">
        {/* Search Input */}
        <div className="flex justify-center mt-10">
          <motion.input
            type="text"
            value={query}
            onChange={onSearchChange}
            placeholder="Search..."
            className="w-full md:w-2/3 lg:w-1/2 p-3 bg-white text-black border rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Search Results */}
        <div className="mt-6 bg-white h-auto rounded-lg shadow-lg p-6">
          <div className="text-2xl p-4 gap-4">
            <span className="text-black">Search</span>
            <span className="text-orange-500 font-bold ml-2">Results...</span>
          </div>

          <AnimatePresence>
            <div className="h-64 overflow-y-auto">
              {Object.keys(groupedResults).length > 0 ? (
                Object.keys(groupedResults).map((type) => (
                  <div key={type}>
                    <h3 className="text-lg font-bold text-gray-700">{type}</h3>
                    <ul>
                      {groupedResults[type].map((result) => (
                        <motion.li
                          key={result.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="mb-4 p-4 border rounded-md shadow-md hover:shadow-lg transition-shadow"
                        >
                          <h2 className="text-xl font-semibold">
                            {highlightMatch(result.name || result.title || "", query)}
                          </h2>
                          <p className="mt-2 text-gray-700">{result.description}</p>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : query ? (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center text-red-500"
                >
                  No results found for "{query}"
                </motion.p>
              ) : null}
            </div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
