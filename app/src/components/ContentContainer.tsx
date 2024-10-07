import { FC } from 'react';
import * as React from 'react'
import useEntryStore from "stores/useEntryStore";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'gmp-map': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'gmp-advanced-marker': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export const ContentContainer: FC = props => {

  const { entries, getEntries } = useEntryStore();

  return (
    <div className="flex-1 drawer h-52">
     {/* <div className="h-screen drawer drawer-mobile w-full"> */}
      <input id="my-drawer" type="checkbox" className="grow drawer-toggle" />
      <div className="items-center  drawer-content">
        {props.children}
        <script async src="https://maps.googleapis.com/maps/api/js?key=WRITEYOURGOOGLEAPIKEYHERE&callback=console.debug&libraries=maps,marker&v=beta">
        </script>
            <gmp-map center="40.121,-100.45" zoom="4.5" map-id="DEMO_MAP_ID">
            {entries && entries.map(
                                    (e, i) => {
                                      let xm=e.message
                                      let xa=xm.split(/\s+/).slice(0,2)
                                      /* if((typeof xa[0]==="number") || (typeof xa[1]==="number")) { */
                                      let xp=xa.join(',')
                                      return(
<gmp-advanced-marker position={xp} title={xm}></gmp-advanced-marker>                                                                
                                    )
                                }
                              /* } */
                                )}   
      <gmp-advanced-marker position="0,0" title="0 0"></gmp-advanced-marker>
    </gmp-map>   
    </div>    </div>
  );
};