import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";
import { Clock, Loader2, Search, XCircle } from "lucide-react";
import { useLocationSearch } from "@/hooks/use-weather";
import { useNavigate } from "react-router-dom";
import { useSearchHistory } from "@/hooks/seearch-history";
import { format } from "date-fns";

const CitySearch = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) {
      setQuery("");
    }
  }, [open]);

  const { data: locations, isLoading } = useLocationSearch(query);
  console.log(locations);
  const { history, clearHistory, addTOHistory } = useSearchHistory();

  const handleSelect = (cityData: string) => {
    const [lat, lon, name, country] = cityData.split("|");

    // /add to search history
    addTOHistory.mutate({
      query,
      lat: parseFloat(lat),
      lon: parseFloat(lon),
      name,
      country,
    });

    setOpen(false);
    navigate(`/city/${name}?lat=${lat}&lon=${lon}`);
    // You can add more logic here, e.g., trigger a search or update state
  };

  return (
    <>
      <Button
        variant={"outline"}
        className="relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
        onClick={() => setOpen(true)}
      >
        <Search className="mr-2 h-4 w-4" />
        Search cities...
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search cities..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          {query.length > 2 && !isLoading && (
            <CommandEmpty>No results found.</CommandEmpty>
          )}
          {/* <CommandGroup heading="Favorites">
            <CommandItem>Calendar</CommandItem>
          </CommandGroup> */}

          {history.length > 0 && (
            <>
              <CommandSeparator />
              <CommandGroup>
                <div className="flex items-center justify-between px-1.5 my-2">
                  <p className="text-xs text-muted-foreground">
                    Recent Searches
                  </p>
                  <Button variant="ghost" onClick={() => clearHistory.mutate()}>
                    <XCircle className="h-4 w-4" />
                    Clear
                  </Button>
                </div>
                {history.map((location) => {
                  return (
                    <CommandItem
                      key={`${location.lat}-${location.name}`}
                      value={`${location.lat}|${location.lon}|${location.name}|${location.country}`}
                      onSelect={handleSelect}
                    >
                      <Clock className="mr-2 h-4 w-4" />
                      <span>{location.name}</span>
                      {location.state && (
                        <span className="text-sm text-muted-foreground">
                          , {location.state}
                        </span>
                      )}
                      <span className="text-sm text-muted-foreground">
                        , {location.country}
                      </span>
                      <span>
                        {format(location.searchedAt, "MMM d , h:mm a")}
                      </span>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </>
          )}

          <CommandSeparator />

          {locations && locations.length > 0 && (
            <CommandGroup heading="Suggestions">
              {isLoading && (
                <div className="flex items-center justify-center p-4">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                </div>
              )}
              {locations.map((location) => {
                return (
                  <CommandItem
                    key={`${location.lat}-${location.name}`}
                    value={`${location.lat}|${location.lon}|${location.name}|${location.country}`}
                    onSelect={handleSelect}
                  >
                    <Search className="mr-2 h-4 w-4" />
                    <span>{location.name}</span>
                    {location.state && (
                      <span className="text-sm text-muted-foreground">
                        , {location.state}
                      </span>
                    )}
                    <span className="text-sm text-muted-foreground">
                      , {location.country}
                    </span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default CitySearch;
