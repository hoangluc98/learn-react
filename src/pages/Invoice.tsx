import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

type Invoice = {
  id: number;
  name: string;
};

export const data: Invoice[] = [
  {
    id: 1,
    name: 'Google'
  },
  {
    id: 2,
    name: 'Facebook'
  }
];

const Invoices = () => {
  const params = useParams<{ invoiceId: string }>();
  const navigate = useNavigate();

  const invoice = data.find((item) => item.id.toString() === params.invoiceId);

  useEffect(() => {
    if (!invoice) navigate('..');
  }, [invoice, navigate]);

  return <div>Invoice #{invoice?.id}</div>;
};

export default Invoices;
