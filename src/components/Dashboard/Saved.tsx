// src/components/Dashboard/Saved.tsx

import { useEffect, useState } from 'react';

interface SavedItem {
  id: number;
  type: 'resource' | 'event' | 'application';
  title: string;
  description: string;
  date?: string;
  status?: string;
}

const Saved = () => {
  const [savedItems, setSavedItems] = useState<SavedItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSavedItems = async () => {
    try {
      const res = await fetch('/api/user/saved');
      if (!res.ok) throw new Error('Failed to fetch saved items');
      const data = await res.json();
      setSavedItems(data);
    } catch (err) {
      console.error(err);
      setError('Unable to load saved items.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSavedItems();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Your Saved Items</h1>

      {loading ? (
        <p className="text-gray-500">Loading saved items...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : savedItems.length === 0 ? (
        <p className="text-gray-500">You haven’t saved any items yet.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {savedItems.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              <p className="text-sm uppercase text-indigo-500 font-medium mb-1">
                {item.type}
              </p>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-1 mb-2">{item.description}</p>

              {item.type === 'event' && item.date && (
                <p className="text-sm text-gray-700">
                  <strong>Event Date:</strong> {item.date}
                </p>
              )}

              {item.type === 'application' && item.status && (
                <p className="text-sm">
                  <strong>Status:</strong>{' '}
                  <span
                    className={`inline-block px-2 py-1 rounded text-white text-xs ${
                      item.status === 'Under Review'
                        ? 'bg-yellow-500'
                        : item.status === 'Accepted'
                        ? 'bg-green-500'
                        : 'bg-gray-400'
                    }`}
                  >
                    {item.status}
                  </span>
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Saved;
