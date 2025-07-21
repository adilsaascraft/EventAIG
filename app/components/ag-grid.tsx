'use client';
import { useFetchJson } from '@/app/data/useFetchJson';
import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import type {
  ColDef,
  RowSelectionOptions,
  ValueFormatterParams,
} from "ag-grid-community";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);


const dateFormatter = (params: ValueFormatterParams): string => {
  return new Date(params.value).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

interface IRow {
  regNumber: string;
  fullName: string;
  category:string;
  mobileNumber: number;
  email: string;
  city: string;
  state: string;
  date: string;
  time: string;
}

const rowSelection: RowSelectionOptions = {
  mode: "multiRow",
  headerCheckbox: false,
};

const GridExample = () => {
  const { data, loading } = useFetchJson<IRow>(
    "/api/registrations"
  );

  const [colDefs] = useState<ColDef[]>([
    { field: "regNumber", width: 150 },
    { field: "fullName", width: 200},
    { field: "category", width: 150 },
    { field: "mobileNumber", width: 150},
    { field: "email", width: 200, },
    { field: "city", width: 150 },
    { field: "state", width: 150 },
    { field: "date", valueFormatter: dateFormatter },
  ]);

  const defaultColDef = useMemo<ColDef>(() => {
    return {
      filter: true,
      editable: true,
      resizable: true,
      sortable: true,
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "600px" }} className="ag-theme-alpine">
      <AgGridReact
        rowData={data}
        loading={loading}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        pagination={true}
        rowSelection={rowSelection}
        onSelectionChanged={() => console.log("Row Selected!")}
        onCellValueChanged={(event) =>
          console.log(`New Cell Value: ${event.value}`)
        }
      />
    </div>
  );
};

export default GridExample;

  

 

